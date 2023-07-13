import ParametersWithLanguage from "../common/ParametersWithLanguage";
import ParametersWithModelVersion from "../common/ParametersWithModelVersion";

export default interface ReadParameters
  extends ParametersWithLanguage,
    ParametersWithModelVersion {
  /**
   * @param pages The page selection only leveraged for multi-page PDF and TIFF documents. Accepted input include single pages (e.g.'1, 2' -> pages 1 and 2 will be processed), finite (e.g. '2-5' -> pages 2 to 5 will be processed) and open-ended ranges (e.g. '5-' -> all the pages from page 5 will be processed & e.g. '-10' -> pages 1 to 10 will be processed). All of these can be mixed together and ranges are allowed to overlap (eg. '-5, 1, 3, 5-10' - pages 1 to 10 will be processed). The service will accept the request if it can process at least one page of the document (e.g. using '5-100' on a 5 page document is a valid input where page 5 will be processed). If no page range is provided, the entire document will be processed.
   */
  pages?: string;
  /**
   * @param readingOrder Optional parameter to specify which reading order algorithm should be applied when ordering the extract text elements. Can be either 'basic' or 'natural'. Will default to basic if not specified
   */
  readingOrder?: string;
}
