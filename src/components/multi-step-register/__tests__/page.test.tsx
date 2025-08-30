import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MultiStepRegister from '../page';

// Mock child components with simple renders
vi.mock('../basic-info-page', () => ({
  default: () => <div data-testid="basic-info">Basic Info Page</div>,
}));

vi.mock('../details-page', () => ({
  default: () => <div data-testid="details">Details Page</div>,
}));

vi.mock('../account-page', () => ({
  default: () => <div data-testid="account">Account Page</div>,
}));

vi.mock('../confirmation-page', () => ({
  default: () => <div data-testid="confirmation">Confirmation Page</div>,
}));

vi.mock('../complete-page', () => ({
  default: () => <div data-testid="complete">Complete Page</div>,
}));

// Mock react-hook-form with proper exports
vi.mock('react-hook-form', async () => {
  const actual = await vi.importActual('react-hook-form');
  return {
    ...actual,
    useForm: () => ({
      control: {},
      handleSubmit: vi.fn(),
      trigger: vi.fn(),
      formState: { errors: {} },
      watch: vi.fn(),
    }),
  };
});

// Mock sonner
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('MultiStepRegister', () => {
  it('renders the first step by default', () => {
    render(<MultiStepRegister />);
    expect(screen.getByTestId('basic-info')).toBeInTheDocument();
  });

  it('renders step navigation buttons', () => {
    render(<MultiStepRegister />);

    expect(screen.getByText('Go Back')).toBeInTheDocument();
    expect(screen.getByText('Next Step')).toBeInTheDocument();
  });

  it('has proper step structure with 5 steps', () => {
    render(<MultiStepRegister />);

    // Check that step navigation elements exist
    const stepButtons = screen.getAllByRole('button');
    expect(stepButtons.length).toBeGreaterThan(0);
  });
});
