export default interface ParametersWithModelVersion {
  /**
   * @param model-version Optional parameter to specify the version of the OCR model used to extract text information for the image/document submitted. Accepted values are: "latest", "2022-04-30", "2021-04-12". Defaults to latest if not provided.
   */
  "model-version"?: string;
}
