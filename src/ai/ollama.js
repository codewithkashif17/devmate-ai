
const OLLAMA_API_URL = "http://127.0.0.1:11434/api/generate";

const MODEL_NAME = "qwen2.5-coder:1.5b";

export async function askLocalModel(prompt) {
  const response = await fetch(OLLAMA_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL_NAME,
      prompt,
      stream: false,
    }),
    signal: AbortSignal.timeout(120000),
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Ollama API error (${response.status}): ${errorText}`
    );
  }

  const data = await response.json();

  return data.response;
}
