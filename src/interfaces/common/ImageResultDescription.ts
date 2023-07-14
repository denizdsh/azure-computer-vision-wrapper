import TextConfidenceObject from "./TextConfidenceObject";

export default interface ImageResultDescription {
  tags: string[];
  captions: TextConfidenceObject[];
}
