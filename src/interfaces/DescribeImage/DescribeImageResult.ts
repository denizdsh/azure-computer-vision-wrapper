import ImageResultBase from "../common/ImageResultBase";
import ImageResultDescription from "../common/ImageResultDescription";

export default interface DescribeImageResult extends ImageResultBase {
  description: ImageResultDescription;
}
