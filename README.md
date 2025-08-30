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

## Testing

The project uses Vitest for unit testing with React Testing Library.

### Running Tests

1. **Run all tests:**
   ```bash
   npm test
   ```

2. **Run tests in watch mode:**
   ```bash
   npm run test:ui
   ```

3. **Run tests once and exit:**
   ```bash
   npm run test:run
   ```

4. **Run tests with coverage report:**
   ```bash
   npm run test:coverage
   ```

### Test Structure

Tests are located alongside the components they test:
```
src/
├── components/
│   └── multi-step-register/
│       ├── __tests__/
│       │   ├── page.test.tsx           # Tests for main component
│       │   └── confirmation-page.test.tsx # Tests for confirmation logic
│       └── (component files)
└── lib/
    └── __tests__/
        └── schema.test.ts              # Tests for form validation schema
```

### Test Coverage

Current test coverage includes:
- Form validation schema testing
- Multi-step navigation logic
- Confirmation page data display
- Component rendering tests

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
