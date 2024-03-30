import { encoding_for_model, TiktokenModel } from "@dqbd/tiktoken";

const embeddingEncoding = encoding_for_model("text-embedding-ada-002");

export const getTokenizationInfo = ({
  forModel,
  inText,
}: {
  forModel: TiktokenModel;
  inText: string;
}) => {
  let encoding;
  switch (forModel) {
    case "text-embedding-ada-002":
      encoding = embeddingEncoding;
      break;
    default:
      throw new Error("Unhandled model");
  }
  const tokens = encoding.encode(inText);
  return { numTokens: tokens.length };
};
