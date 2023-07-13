import NameConfidenceObject from "../common/NameConfidenceObject";
import ReadResultsWord from "./ReadResultsWord";

export default interface ReadResultsLine {
  boundingBox: number[];
  text: string;
  appearance: {
    style: NameConfidenceObject;
  };
  words: ReadResultsWord[];
}
