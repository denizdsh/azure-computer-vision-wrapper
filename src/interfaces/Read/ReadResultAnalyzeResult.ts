import ReadResultsLine from "./ReadResultsLine";

export default interface ReadResultAnalyzeResult {
  page: number;
  angle: number;
  width: number;
  height: number;
  unit: string;
  language: string;
  lines: ReadResultsLine[];
}
