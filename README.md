## Mir Portfolio

A modern, automotive‑themed **developer portfolio** built with React, Vite, and Tailwind CSS.  
It showcases your skills, projects, and contact details inside a custom **terminal / dashboard UI** with smooth animations.

### Tech stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, custom theme (`challenger-orange`, `brake-red`, carbon-fiber background)
- **Animation & UX**: Framer Motion, custom status lights and transitions
- **Icons**: `lucide-react`
- **Email**: Resend (for the contact form)

### Main sections

- **Pre‑Landing / Hero**: High‑impact entry screen with bold typography and motion.
- **Navbar**: Smooth scrolling navigation across sections.
- **About**: Short intro about you and your background.
- **Skills**: Structured list of your core technologies and tools.
- **Projects**: Highlighted projects with descriptions and visual styling.
- **Contact**:
  - Terminal‑style `CONTACT_FORM.EXE` window.
  - Dynamic status colors:
    - **Red** when the form is empty.
    - **Yellow** when all fields are filled.
    - **Green** after successful submission.
  - Sends emails using **Resend**.

### Getting started

#### 1. Install dependencies

```bash
npm install
```

#### 2. Run the dev server

```bash
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173`).

#### 3. Build for production

```bash
npm run build
```

Optionally preview the production build:

```bash
npm run preview
```

### Email / Resend setup

1. Create a **Resend** account and an API key (use **Sending access** only).
2. In the project root, open `.env` and set:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

3. (Optional) Configure custom sender/receiver:

```env
RESEND_FROM_EMAIL=Portfolio <hello@yourdomain.com>
RESEND_TO_EMAIL=you@example.com
```

4. Restart the dev server after changing `.env`.

On production (e.g. **Vercel**), add the same variables in your project’s Environment Variables settings.

### Scripts

- **`npm run dev`**: Start Vite dev server.
- **`npm run build`**: Build the portfolio for production.
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Run ESLint over the codebase.