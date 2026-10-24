
import { askLocalModel } from "../ai/ollama.js";

export async function runAgent(userMessage) {
  const prompt = `
You are DevMate AI, a helpful personal AI coding assistant.

Answer the user's question clearly.
For programming questions, explain the concept and provide examples when useful.
Do not claim to execute tools or modify files unless a tool actually does so.

User request:
${userMessage}
`;

  const answer = await askLocalModel(prompt);

  return answer;
}
