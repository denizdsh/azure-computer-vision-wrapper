export default interface ImageResultBase {
  requestId: string;
  metadata: {
    width: number;
    height: number;
    format: string;
  };
  modelVersion: string;
}
