
# CareerCraft: Design Your Future Career Path

CareerCraft is an AI‑powered career guidance platform that helps students and early‑career professionals discover suitable career paths, assess their skills, and explore salary insights using Meta LLaMA 3 via the Groq API.

---

## Project info

**Live project (Lovable):**  
`(https://career-craft-bot11.lovable.app)`

***

## How can I edit this code?

You can work on CareerCraft either directly in Lovable or using your local environment.

### 1. Use Lovable

Open the [Lovable project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and modify the app via prompts or the in‑browser editor.

- Changes made in Lovable are automatically committed to this repository.
- This is the easiest way to iterate on UI, flows, and AI prompts.

### 2. Use your preferred IDE 

You can clone the repo and work locally with VS Code, WebStorm, or any editor that supports TypeScript/React.

Requirements:

- Node.js and npm (or pnpm / yarn) installed – typically via nvm.

Steps:

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Go into the project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will start on the port configured by Vite (commonly `http://localhost:5173`).

### 3. Edit a file directly in GitHub

- Open the repo on GitHub.
- Navigate to the file you want to modify.
- Click the pencil icon (Edit this file).
- Make your changes and commit.

### 4. Use GitHub Codespaces

- Open the repository on GitHub.
- Click **Code** → **Codespaces** → **New codespace**.
- Develop in the cloud IDE, then commit and push when done.

---

## Technology stack

CareerCraft is built as a modern full‑stack web application.

### Frontend

- **React 18** – component‑based SPA
- **TypeScript** – type‑safe JavaScript
- **Vite** – fast dev server and build tool
- **Tailwind CSS** – utility‑first styling
- **shadcn/ui** – Radix‑based UI components
- **React Router** – client‑side routing
- **TanStack React Query** – server‑state management
- **React Hook Form + Zod** – forms and validation
- **Recharts** – dashboards and charts
- **Lucide React, Sonner, date‑fns** – icons, toasts, date utilities

### Backend & Data

- **Supabase** – backend‑as‑a‑service
- **PostgreSQL** – relational database
- **Supabase Auth** – email/password authentication, password reset
- **Supabase Edge Functions (Deno)** – serverless endpoints for AI and business logic
- **Row Level Security (RLS)** – per‑user data protection

### AI Engine

- **Meta LLaMA 3** – core LLM for:
  - career guidance and recommendations  
  - resume tips  
  - interview preparation  
  - career roadmaps  
  - salary insights
- **Groq API** – fast LLaMA inference

***

## Core features

- User registration, login, and password reset
- AI‑powered career guidance chatbot
- Skill assessment with selectable skill categories (technical, business, creative, etc.)
- Career roadmap generation
- Interview preparation guides
- Resume improvement suggestions
- Salary insights powered by Meta LLaMA
- Dashboard with goals, achievements, and saved careers
- Subscription plans (Free / Premium / Pro) with query limits

***

## How can I deploy this project?

The simplest way to publish CareerCraft is from Lovable:

1. Open the [Lovable project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID).  
2. Click **Share → Publish** to build and deploy the latest version.

Supabase hosting (database, auth, edge functions) continues to serve as the backend; Lovable handles the frontend deployment.

***

## Custom domain

You can connect a custom domain to your Lovable deployment.

1. In Lovable, open **Project → Settings → Domains**.
2. Click **Connect Domain** and follow the instructions (DNS setup, verification).
3. Point your domain or subdomain (e.g., `careercraft.yourdomain.com`) to the Lovable project.

For more details, see the Lovable docs on custom domains.

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/4898917/3195d11c-eb4c-4b4d-89ed-d5a7c186904f/image.jpg)
[2](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/4898917/625175be-d495-4da6-9441-52686a9eeed2/paste.txt)
