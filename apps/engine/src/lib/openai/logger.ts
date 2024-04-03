import { config } from "../config.js";
import { appendFile } from "fs/promises";

export const logger = (header: string, obj: any) => {
  const path = `${config.OPENAI_LOG_DIR}/logs.json`;

  const str = `
  ---------------------------------------------------------------------------------------
  ${header}

  ${JSON.stringify(obj, null, 2)}

  ---------------------------------------------------------------------------------------

  `;

  appendFile(path, str);
};
