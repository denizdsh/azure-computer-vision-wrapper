import Util from "./Util";
import AnalyzeImageParameters from "../interfaces/AnalyzeImage/AnalyzeImageParameters";
import AzureConfig from "../interfaces/AzureConfig";
import ReadParameters from "../interfaces/Read/ReadParameters";
import ReadResult from "../interfaces/Read/ReadResult";
import ClientNotInitializedError from "./errors/ClientNotInitializedError";
import AnalyzeImageResult from "../interfaces/AnalyzeImage/AnalyzeImageResult";
import DescribeImageParameters from "../interfaces/DescribeImage/DescribeImageParameters";
import DescribeImageResult from "../interfaces/DescribeImage/DescribeImageResult";

const CV_VERSION = "v3.2";

class ComputerVisionClient {
  private _azureConfig?: AzureConfig;
  private _msEndpoint?: string;

  /**
   * Wrapper library initialization.
   * @param azureConfig Required configuration for connecting to the Azure server.
   */
  constructor(azureConfig?: AzureConfig) {
    if (azureConfig) {
      this.azureConfig = azureConfig;
    }
  }

  private get azureConfig(): AzureConfig {
    if (!this._azureConfig) {
      throw new ClientNotInitializedError();
    }

    return this._azureConfig;
  }

  private set azureConfig(config: AzureConfig) {
    this._azureConfig = config;
    this._msEndpoint = `https://${this._azureConfig.endpoint}/vision/${CV_VERSION}`;
  }

  private get msEndpoint(): string {
    if (!this._msEndpoint) {
      throw new ClientNotInitializedError();
    }

    return this._msEndpoint;
  }

  private getUrlWithParams<ParamsType extends {}>(
    endpoint: string,
    params?: ParamsType
  ): URL {
    return Util.getUrlWithParams([this.msEndpoint, endpoint], params);
  }

  private async fetch(
    input: URL | RequestInfo,
    init?: RequestInit & {
      method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    }
  ): Promise<Response> {
    init = init || {};

    init.headers = {
      ...init.headers,
      "Ocp-Apim-Subscription-Key": this.azureConfig.apiKey,
      "Content-type": "application/json",
    };

    return await fetch(input, init);
  }

  private async fetchJSON<ReturnType>(
    input: URL | RequestInfo,
    init?: RequestInit & {
      method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    }
  ): Promise<ReturnType> {
    return await (await this.fetch(input, init)).json();
  }

  public async requestRead(
    imageUrl: string,
    params?: ReadParameters
  ): Promise<{ operationLocation: string; res: Response }> {
    const endpoint = this.getUrlWithParams("/read/analyze", params);

    const res = await this.fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ url: imageUrl }),
    });

    const operationLocation: string =
      res.headers.get("Operation-Location") || "";

    return { operationLocation, res };
  }

  public async getReadResult(url: string): Promise<ReadResult> {
    let res = await this.fetchJSON<ReadResult>(url);

    while (res.status === "notStarted" || res.status === "running") {
      await Util.wait(200);

      res = await this.fetchJSON(url);
    }

    return res;
  }

  public async read(
    imageUrl: string,
    params?: ReadParameters
  ): Promise<ReadResult> {
    const operationLocation = (await this.requestRead(imageUrl, params))
      .operationLocation;
    return await this.getReadResult(operationLocation);
  }

  public async analyzeImage(
    imageUrl: string,
    params?: AnalyzeImageParameters
  ): Promise<AnalyzeImageResult> {
    const endpoint = this.getUrlWithParams("/analyze", params);

    return await this.fetchJSON<AnalyzeImageResult>(endpoint, {
      method: "POST",
      body: JSON.stringify({ url: imageUrl }),
    });
  }

  public async describeImage(
    imageUrl: string,
    params?: DescribeImageParameters
  ): Promise<DescribeImageResult> {
    const endpoint = this.getUrlWithParams("/describe", params);

    return await this.fetchJSON<DescribeImageResult>(endpoint, {
      method: "POST",
      body: JSON.stringify({ url: imageUrl }),
    });
  }
}

export default ComputerVisionClient;
