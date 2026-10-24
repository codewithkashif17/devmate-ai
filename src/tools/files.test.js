
import assert from "node:assert/strict";
import { readProjectFile } from "./files.js";

const content = await readProjectFile("package.json");

assert.ok(content.includes("personal-ai-agent"));

await assert.rejects(
  readProjectFile("../package.json"),
  /outside the project/
);

await assert.rejects(
  readProjectFile(""),
  /file path/
);

console.log("File tool tests passed.");
