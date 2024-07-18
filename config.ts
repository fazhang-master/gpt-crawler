import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.chinanews.com",
  match: "https://www.chinanews.com/**",
  maxPagesToCrawl: 3,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
