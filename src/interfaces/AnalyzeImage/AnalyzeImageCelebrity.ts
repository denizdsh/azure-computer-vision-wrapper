import ComputerVisionFaceRectangle from "../common/ComputerVisionFaceRectangle";
import NameConfidenceObject from "../common/NameConfidenceObject";

export default interface AnalyzeImageCelebrity extends NameConfidenceObject {
  faceRectangle: ComputerVisionFaceRectangle;
}
