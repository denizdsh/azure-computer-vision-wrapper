class Util {
  public static async wait(ms: number) {
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default Util;
