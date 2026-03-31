# multi-step-form

A multi-step registration form built with React, TypeScript, and Tailwind CSS.

## Live Demo

🔗 [[Live Demo](https://multi-step-form-beige-zeta.vercel.app/)]

## Tech Stack

- **React 18** — UI library
- **TypeScript** — static typing
- **Tailwind CSS v4** — styling
- **Vite** — build tool

## Features

- 3-step form with step indicator
- Client-side validation on each step before proceeding
- Inline error messages below invalid fields
- Collects all data and outputs to `console.log()` as a JSON object on submit
- Responsive layout — works on desktop (1200px+) and mobile (375px)

## Project Structure

```
src/
├── components/
│   ├── Buttons.tsx         # Reusable Next / Back / Submit buttons
│   ├── MultiStepForm.tsx   # Form wrapper with validation logic
│   └── StepIndicator.tsx   # Step progress indicator
├── steps/
│   ├── Step1.tsx           # Personal info fields
│   ├── Step2.tsx           # Address fields
│   └── Step3.tsx           # Confirmation + checkboxes
├── types/
│   ├── form.ts             # FormData interface
│   └── validation.ts       # Validation functions
├── App.tsx
└── main.tsx
```

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/Nabeyko/multi-step-form.git
cd multi-step-form

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Time Spent

Approximately 8 hours.

## IDE & Tools

- **VS Code**
- Extensions: ESLint, Prettier, Tailwind CSS IntelliSense

## AI Tools Used

- **Claude (Anthropic)** 
