import ReadResultAnalyzeResult from "./ReadResultAnalyzeResult";

export default interface ReadResult {
  status: string;
  createdDateTime: string;
  lastUpdatedDateTime: string;
  analyzeResult: {
    version: string;
    modelVersion: string;
    readResults: ReadResultAnalyzeResult[];
  };
}
