import TextConfidenceObject from "../common/TextConfidenceObject";

export default interface ReadResultsWord extends TextConfidenceObject {
  boundingBox: number[];
}
