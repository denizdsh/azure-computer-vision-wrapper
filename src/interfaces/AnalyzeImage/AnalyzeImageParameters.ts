import ParametersWithLanguage from "../common/ParametersWithLanguage";
import ParametersWithModelVersion from "../common/ParametersWithModelVersion";

export type AnalyzeImageVisualFeature =
  | "Adult"
  | "Brands"
  | "Categories"
  | "Color"
  | "Description"
  | "Faces"
  | "ImageType"
  | "Objects"
  | "Tags";
export type AnalyzeImageDetail = "Celebrities" | "Landmarks";

export default interface AnalyzeImageParameters
  extends ParametersWithLanguage,
    ParametersWithModelVersion {
  /**
         * @param visualFeatures A string indicating what visual feature types to return. Valid visual feature types include:
         
Adult - detects if the image is pornographic in nature (depicts nudity or a sex act), or is gory (depicts extreme violence or blood). Sexually suggestive content (aka racy content) is also detected.

Brands - detects various brands within an image, including the approximate location. The Brands argument is only available in English.

Categories - categorizes image content according to a taxonomy defined in documentation.

Color - determines the accent color, dominant color, and whether an image is black&white.

Description - describes the image content with a complete sentence in supported languages.

Faces - detects if faces are present. If present, generate coordinates, gender and age.

ImageType - detects if image is clipart or a line drawing.

Objects - detects various objects within an image, including the approximate location. The Objects argument is only available in English.

Tags - tags the image with a detailed list of words related to the image content.
         */
  visualFeatures?: AnalyzeImageVisualFeature[];
  /**
 * @param details A string indicating which domain-specific details to return. Valid visual feature types include:

Celebrities - identifies celebrities if detected in the image.

Landmarks - identifies landmarks if detected in the image.
 */
  details?: AnalyzeImageDetail[];
}
