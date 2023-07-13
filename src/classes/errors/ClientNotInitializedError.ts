export default class ClientNotInitializedError extends Error {
  constructor(options?: ErrorOptions) {
    if (!options) {
      options = {
        cause:
          '"init" Method should be called before any interaction with the client',
      };
    }

    super("Azure Computer Vision client not initialized", options);
  }
}
