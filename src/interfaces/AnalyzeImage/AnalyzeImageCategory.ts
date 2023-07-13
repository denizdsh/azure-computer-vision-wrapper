import AnalyzeImageCelebrity from "./AnalyzeImageCelebrity";
import NameConfidenceObject from "../common/NameConfidenceObject";

export default interface AnalyzeImageCategory {
  name: string;
  score: number;
  detail?: {
    celebrities?: AnalyzeImageCelebrity[];
    landmarks?: NameConfidenceObject[];
  };
}
