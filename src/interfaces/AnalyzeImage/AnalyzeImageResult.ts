import { ClipartType } from "../../enums/ClipartType";
import { LineDrawingType } from "../../enums/LineDrawingType";

import ComputerVisionFace from "../common/ComputerVisionFace";
import ImageResultBase from "../common/ImageResultBase";
import NameConfidenceObject from "../common/NameConfidenceObject";
import TextConfidenceObject from "../common/TextConfidenceObject";
import AnalyzeImageCategory from "./AnalyzeImageCategory";

export default interface AnalyzeImageResult extends ImageResultBase {
  categories: AnalyzeImageCategory[];
  adult?: {
    isAdultContent: boolean;
    isRacyContent: boolean;
    isGoryContent: boolean;
    adultScore: number;
    racyScore: number;
    goreScore: number;
  };
  tags?: NameConfidenceObject[];
  description?: {
    tags: string[];
    captions: TextConfidenceObject[];
  };
  faces?: ComputerVisionFace[];
  color?: {
    dominantColorForeground: string;
    dominantColorBackground: string;
    dominantColors: string[];
    accentColor: string;
    isBWImg: boolean;
  };
  imageType?: {
    clipArtType: ClipartType;
    lineDrawingType: LineDrawingType;
  };
  objects?: {
    rectangle: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    object: string;
    confidence: number;
  }[];
}
