import ParametersWithLanguage from "../common/ParametersWithLanguage";
import ParametersWithModelVersion from "../common/ParametersWithModelVersion";

export default interface DescribeImageParameters
  extends ParametersWithLanguage,
    ParametersWithModelVersion {
  /**
   * @param maxCandidates Maximum number of candidate descriptions to be returned. The default is 1.
   */
  maxCandidates: string;
}
