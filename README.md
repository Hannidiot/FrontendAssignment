# Frontend Assignment - Multi-Step Registration Form

A modern multi-step registration form built with React, TypeScript, and Tailwind CSS.

## Features

- Multi-step form navigation
- Form validation with Zod
- Country selection dropdown
- Avatar upload with drag & drop
- Responsive design
- Confirmation summary page

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## How to Run

1. After installing dependencies, run the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

3. Follow the multi-step registration process:
   - Step 1: Basic Information (First Name, Last Name, Date of Birth)
   - Step 2: Personal Details (Country, Gender, Avatar Upload)
   - Step 3: Account Information (Email, Password)
   - Step 4: Confirmation Summary

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod (Validation)
- Vite (Build Tool)
- Shadcn/ui Components

## Project Structure

```
src/
├── components/
│   ├── multi-step-register/
│   │   ├── page.tsx          # Main multi-step form component
│   │   ├── basic-info-page.tsx
│   │   ├── details-page.tsx  # Country selection & avatar upload
│   │   ├── account-page.tsx
│   │   └── confirmation-page.tsx # Summary page
│   └── ui/                   # Shadcn/ui components
├── lib/
│   ├── schema.ts             # Zod validation schemas
│   └── utils.ts              # Utility functions
└── types/
    └── form.types.ts         # TypeScript type definitions
