class Util {
  public static async wait(ms: number) {
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }

  public static getUrlWithParams<ParamsType extends {}>(
    urlPath: string | string[],
    params?: ParamsType
  ): URL {
    if (Array.isArray(urlPath)) {
      urlPath = urlPath.join("");
    }

    const url = new URL(urlPath);

    if (params) {
      Object.entries(params).forEach((p) =>
        url.searchParams.append(p[0], p[1] as string)
      );
    }

    return url;
  }
}

export default Util;
