# DevMate AI 🤖

### Your Local AI Coding Companion

**DevMate AI** is a command-line AI coding assistant built with JavaScript and Node.js. It integrates with Ollama to generate AI-powered programming explanations directly in the terminal.

The project is part of my journey toward mastering advanced JavaScript, understanding AI agent architecture, and building practical developer tools.

> **Project Status:** In Development 🚧

---

##  Table of Contents

- [Overview](#-overview)
- [Current Features](#-current-features)
- [Demo](#-demo)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [How It Works](#-how-it-works)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Testing](#-testing)
- [Security](#-security)
- [Current Limitations](#-current-limitations)
- [Future Improvements](#-future-improvements)
- [Learning Objectives](#-learning-objectives)
- [Contributing](#-contributing)
- [License](#-license)

---

##  Overview

DevMate AI provides an interactive terminal interface where developers can ask programming questions and receive AI-generated responses.

Instead of relying exclusively on browser-based AI tools, this project explores how a developer-focused AI assistant can be built using Node.js, modular JavaScript architecture, local AI inference, and developer utilities.

The long-term goal is to evolve DevMate AI into a reliable personal development assistant that can explain code, help troubleshoot errors, inspect project files, and support repetitive development tasks with appropriate safety controls.

##  Current Features

Based on the current project structure and CLI demonstration:

- **Interactive CLI:** Ask programming questions directly from the terminal.
- **Ollama Integration:** Connect the assistant to an Ollama-powered language model.
- **Modular Architecture:** Separate agent, AI, memory, security, and tool responsibilities.
- **Memory Module:** A dedicated module for handling stored data.
- **Developer Tools:** Separate modules for file operations and developer utilities.
- **Security Approvals:** An approval mechanism intended to control tool execution.
- **Automated Testing:** Initial tests for validating project functionality.

Feature completeness and individual tool capabilities may evolve as development continues.

## 🖥️ Demo

Example terminal session:

```text
================================
          DevMate AI
================================
Your local AI coding assistant.
Type 'exit' to quit.

You: difference between const and let

DevMate AI is thinking...

DevMate AI: [AI-generated explanation]

You: exit

DevMate AI closed.
```

The assistant accepts natural-language programming questions and returns generated responses in the terminal.

**Note:** AI-generated explanations can contain inaccuracies. Always verify important technical information against reliable documentation and actual code behavior.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Core application logic |
| Node.js | Runtime environment |
| npm | Package management and scripts |
| Ollama | Local language-model integration |
| JSON | Structured data storage |
| Node.js testing tools | Automated testing |

The exact model, dependencies, and testing framework depend on the project's current configuration.

##  Project Architecture

```text
devmate-ai/
│
├── data/
│   └── tasks.json
│
├── src/
│   ├── index.js
│   │
│   ├── agent/
│   │   └── controller.js
│   │
│   ├── ai/
│   │   └── ollama.js
│   │
│   ├── memory/
│   │   └── store.js
│   │
│   ├── security/
│   │   └── approvals.js
│   │
│   └── tools/
│       ├── developer.js
│       ├── files.js
│       └── files.test.js
│
├── tests/
│   └── basic.test.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

### Directory Responsibilities

**`src/index.js` — Application Entry Point**

Starts the CLI application, handles user interaction, and coordinates the main application flow.

**`src/agent/controller.js` — Agent Controller**

Separates agent orchestration from the CLI and AI integration layers.

**`src/ai/ollama.js` — AI Integration**

Contains the Ollama integration responsible for communicating with the configured language model.

**`src/memory/store.js` — Memory Management**

Provides a dedicated location for storing and retrieving application memory.

**`src/security/approvals.js` — Security Approvals**

Contains the approval mechanism for controlling supported operations.

**`src/tools/developer.js` — Developer Utilities**

Organizes developer-oriented functionality.

**`src/tools/files.js` — File Operations**

Contains file-related tool functionality.

**`data/tasks.json` — Task Data**

Stores task-related data in JSON format.

**`tests/` — Automated Tests**

Contains tests for checking application behavior.

**`src/tools/files.test.js` — File Tool Tests**

Keeps file-tool testing close to the relevant module.

*The descriptions above represent the intended responsibilities suggested by the current module structure. Exact behavior depends on each implementation.*

##  How It Works

The intended high-level workflow is:

```text
User Input
    |
    v
CLI Interface
    |
    v
Agent Controller
    |
    v
Ollama Integration
    |
    v
Language Model
    |
    v
Generated Response
    |
    v
Terminal Output
```

When a supported developer tool is invoked, the architecture can additionally involve the memory, tool, and security modules.

The exact execution path depends on the implemented controller logic and the capabilities currently enabled.

##  Prerequisites

Before installing DevMate AI, make sure you have:

- [Node.js](https://nodejs.org/) installed.
- npm available through your Node.js installation.
- [Ollama](https://ollama.com/) installed and running.
- A language model downloaded in Ollama.
- Git installed if you intend to clone the repository.

Check your environment:

```bash
node --version
npm --version
ollama --version
```

##  Installation

### 1. Clone the Repository

Replace the example URL with your actual GitHub repository URL.

```bash
git clone https://github.com/codewithkashif17/devmate-ai.git
```

### 2. Navigate to the Project

```bash
cd devmate-ai
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Download an Ollama Model

For example, you can download a general-purpose model:

```bash
ollama pull qwen2.5-coder:7b
```

Model requirements depend on your machine's available memory, processing power, and the model you choose.

**Important:** Configure the application to use the model you actually downloaded. The example model above may differ from your current configuration.

### 5. Start Ollama

Depending on your operating system and installation, Ollama may already be running.

Otherwise, start its local service:

```bash
ollama serve
```

If the service is already running, do not start a second instance.

### 6. Start DevMate AI

```bash
npm start
```

If the installation and configuration are correct, the interactive CLI should start.

##  Configuration

The repository includes an `.env.example` file.

Review it to identify the configuration variables supported by your current implementation.

If the application requires environment variables, create a local `.env` file and configure the required values according to the example.

```bash
# Example only — use the variables expected by your application.
OLLAMA_MODEL=qwen2.5-coder:7b
```

The variable above is illustrative. Confirm the actual variable names in your source code before using it.

Do not commit `.env` files containing credentials, private configuration, or other secrets.

##  Usage

Start the assistant:

```bash
npm start
```

Then enter a programming question.

### Example Questions

```text
difference between const and let
```

```text
explain JavaScript closures with examples
```

```text
what is the difference between map and forEach
```

```text
explain asynchronous JavaScript
```

```text
what is the event loop in Node.js
```

Exit the interactive session using:

```text
exit
```

The quality, accuracy, and depth of responses depend on the configured model and the application's prompt and response-handling logic.

## 🧪 Testing

Run the test command configured in `package.json`.

If a test script is defined, use:

```bash
npm test
```

The project currently includes:

- `tests/basic.test.js`
- `src/tools/files.test.js`

If no test script exists in `package.json`, configure one before using `npm test`.

Future tests should cover CLI behavior, AI integration, file operations, error handling, approval workflows, and memory persistence.

##  Security

Security is an important part of building an AI-powered developer tool.

DevMate AI includes a dedicated security-approval module. As the project evolves, the following practices should guide its implementation:

- Require explicit approval before sensitive file modifications or command execution.
- Restrict file operations to permitted project directories.
- Avoid executing arbitrary AI-generated shell commands automatically.
- Validate tool inputs before performing operations.
- Handle malformed responses, network failures, and model errors safely.
- Keep secrets and private configuration out of version control.
- Add tests for denied approvals, invalid paths, and unauthorized operations.
- Maintain clear logs for sensitive tool actions without exposing secrets.

**Important:** An approval module alone does not guarantee security. These protections must be implemented, tested, and enforced throughout the application.

## ⚠️ Current Limitations

DevMate AI is an experimental project and should not yet be considered a production-ready autonomous coding agent.

Potential limitations include:

- AI responses may be incorrect, incomplete, or misleading.
- Supported tools depend on their current implementations.
- Memory capabilities depend on the existing storage logic.
- Tool execution and file modification capabilities may be limited.
- Model performance depends on the selected model and available hardware.
- Error recovery, permission boundaries, and broader automated test coverage require continued development.

##  Future Improvements

The following roadmap describes planned improvements, not necessarily features already implemented.

### Phase 1 — Core Reliability

- [ ] Improve system prompts for accurate JavaScript explanations.
- [ ] Add model configuration and model availability checks.
- [ ] Improve error handling and user-friendly error messages.
- [ ] Add request timeouts and graceful shutdown.
- [ ] Validate AI responses and handle empty output.
- [ ] Add comprehensive unit and integration tests.

### Phase 2 — Advanced JavaScript Learning

- [ ] Add topic-based learning modes.
- [ ] Explain concepts using examples and step-by-step reasoning.
- [ ] Add code examples with expected outputs.
- [ ] Add quiz and practice-question modes.
- [ ] Add a JavaScript concept revision system.
- [ ] Support beginner, intermediate, and advanced explanations.

### Phase 3 — Project-Aware Assistance

- [ ] Inspect project directory structures.
- [ ] Read and summarize permitted source files.
- [ ] Explain functions, modules, and dependencies.
- [ ] Detect common code-quality issues.
- [ ] Help diagnose errors using user-provided logs.
- [ ] Add project context without unnecessarily loading entire repositories.

### Phase 4 — Memory and Personalization

- [ ] Persist conversation history.
- [ ] Remember user preferences and learning progress.
- [ ] Support conversation summaries.
- [ ] Add commands to inspect and clear stored memory.
- [ ] Separate project memory from personal learning memory.

### Phase 5 — Developer Tooling

- [ ] Add an extensible tool registry.
- [ ] Add controlled file creation and editing.
- [ ] Introduce patch previews before changing source files.
- [ ] Add explicit approval for sensitive actions.
- [ ] Support Git status and diff inspection.
- [ ] Add optional code-formatting and linting integrations.

### Phase 6 — Security and Reliability

- [ ] Enforce project-directory boundaries.
- [ ] Prevent path traversal in file operations.
- [ ] Validate tool arguments against schemas.
- [ ] Add command allowlists and execution timeouts where appropriate.
- [ ] Add structured audit logs.
- [ ] Test approval bypass attempts and failure scenarios.

### Phase 7 — Developer Experience

- [ ] Add configurable CLI commands and help output.
- [ ] Support model selection from the CLI.
- [ ] Add streaming responses where supported.
- [ ] Add conversation sessions and export options.
- [ ] Improve terminal formatting and code highlighting.
- [ ] Add documentation and contribution guidelines.

## 🎓 Learning Objectives

This project is helping me explore:

- Advanced JavaScript and asynchronous programming.
- Node.js application development.
- Modular code organization and separation of concerns.
- CLI design and interactive input handling.
- Local AI integration with Ollama.
- AI agent orchestration concepts.
- File-system operations and data persistence.
- Security controls for developer tools.
- Automated testing and maintainable software design.

My focus is on learning how individual components work together to form a practical application rather than simply connecting an AI model to a terminal.

##  Contributing

Contributions, suggestions, and constructive feedback are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Add or update tests where appropriate.
5. Submit a pull request describing your changes.

For substantial changes, open an issue first to discuss the proposed approach.

## 📄 License

A license has not yet been specified.

Before publishing or accepting external contributions, choose a suitable open-source license and add a `LICENSE` file to the repository.

---

## 👨‍💻 About the Developer

I'm a Software Engineering student interested in JavaScript, Node.js, AI agents, and building practical developer tools.

DevMate AI is part of my ongoing journey to strengthen my engineering fundamentals through hands-on projects, experimentation, and continuous improvement.

**Building. Learning. Improving. One feature at a time.**

