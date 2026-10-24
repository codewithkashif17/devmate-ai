
import { createInterface } from "node:readline/promises";
import { runAgent } from "./agent/controller.js";

const terminal = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  console.log("\n================================");
  console.log("          DevMate AI");
  console.log("================================");
  console.log("Your local AI coding assistant.");
  console.log("Type 'exit' to quit.\n");

  try {
    while (true) {
      const prompt = await terminal.question("You: ");

      if (prompt.trim().toLowerCase() === "exit") {
        console.log("\nDevMate AI closed.");
        break;
      }

      if (!prompt.trim()) {
        continue;
      }

      try {
        console.log("\nDevMate AI is thinking...\n");

        const answer = await runAgent(prompt);

        console.log(`DevMate AI: ${answer}\n`);
      } catch (error) {
        console.error(`AI Error: ${error.message}\n`);
      }
    }
  } finally {
    terminal.close();
  }
}

main().catch((error) => {
  console.error("Application Error:", error.message);
  process.exitCode = 1;
});
