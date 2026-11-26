A browser-based coding environment where you can write, run, and experiment with code, get AI-powered suggestions, and bring your ideas to life - all in one place.

## Features

- **OAuth Authentication with NextAuth** – Enables login through Google and GitHub.
- **Modern UI** – Developed using TailwindCSS and ShadCN UI.
- **Dark/Light Theme** – Easily switch between dark and light modes.
- **Project Templates** – Provides templates for React, Next.js, Express, Hono, Vue, and Angular.
- **Custom File Explorer** – Supports creating, renaming, deleting, and managing files and folders.
- **Enhanced Monaco Editor** – Offers syntax highlighting, code formatting, keybindings, and AI-powered autocomplete.
- **AI Code Suggestions with Ollama** – Uses local models for code completion via `Ctrl + Space` or double `Enter`, with suggestions accepted using `Tab`.
- **WebContainers Integration** – Allows frontend and backend applications to run directly in the browser.
- **Integrated Terminal with xterm.js** – Provides a fully interactive terminal within the editor.
- **AI Chat Assistant** – Allows users to share files with AI for assistance with code, refactoring, and explanations.

---

##  Tech Stack

| Layer         | Technology                                   |
|---------------|----------------------------------------------|
| Framework     | Next.js 15 (App Router)                      |
| Styling       | TailwindCSS, ShadCN UI                       |
| Language      | TypeScript                                   |
| Auth          | NextAuth (Google + GitHub OAuth)             |
| Editor        | Monaco Editor                                |
| AI Suggestion | Ollama (LLMs running locally via Docker)     |
| Runtime       | WebContainers                                |
| Terminal      | xterm.js                                     |
| Database      | MongoDB (via DATABASE_URL)                   |

---


## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
© 2026 Prashant Pratap Singh. All rights reserved.
