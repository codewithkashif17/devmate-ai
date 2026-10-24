
import path from "node:path";
import { realpath, readFile } from "node:fs/promises";

const PROJECT_ROOT = path.resolve(process.cwd());

export async function readProjectFile(relativePath) {
  if (
    typeof relativePath !== "string" ||
    relativePath.trim() === ""
  ) {
    throw new Error("Please provide a file path.");
  }

  if (path.isAbsolute(relativePath)) {
    throw new Error("Absolute paths are not allowed.");
  }

  const targetPath = path.resolve(PROJECT_ROOT, relativePath);
  const relative = path.relative(PROJECT_ROOT, targetPath);

  if (
    relative === "" ||
    relative === ".." ||
    relative.startsWith(`..${path.sep}`)
  ) {
    throw new Error("Access outside the project is not allowed.");
  }

  const realRoot = await realpath(PROJECT_ROOT);
  const realTarget = await realpath(targetPath);
  const realRelative = path.relative(realRoot, realTarget);

  if (
    realRelative === "" ||
    realRelative === ".." ||
    realRelative.startsWith(`..${path.sep}`) ||
    path.isAbsolute(realRelative)
  ) {
    throw new Error("Access outside the project is not allowed.");
  }

  const content = await readFile(realTarget, "utf8");

  return content;
}
