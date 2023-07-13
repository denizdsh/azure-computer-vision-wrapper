import ComputerVisionClient from "./classes/ComputerVisionClient";
import type AzureConfig from "./interfaces/AzureConfig";

export let client = new ComputerVisionClient();

export function init(azureConfig: AzureConfig) {
  client = new ComputerVisionClient(azureConfig);
  return client;
}
