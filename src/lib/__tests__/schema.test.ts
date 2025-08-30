import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { formDataSchema } from '../schema';

describe('Form Data Schema Validation', () => {
  describe('Complete Form Validation', () => {
    it('should validate complete form data', () => {
      const completeData = {
        firstName: 'John',
        lastName: 'Doe',
        birth: new Date('1990-01-01'),
        gender: 'male',
        country: 'United States',
        email: 'john.doe@example.com',
        password: 'SecurePass123!',
      };

      expect(() => formDataSchema.parse(completeData)).not.toThrow();
    });

    it('should validate with optional avatar field', () => {
      const completeData = {
        firstName: 'John',
        lastName: 'Doe',
        birth: new Date('1990-01-01'),
        gender: 'male',
        country: 'United States',
        email: 'john.doe@example.com',
        password: 'SecurePass123!',
        avatar: new File([''], 'avatar.png', { type: 'image/png' }),
      };

      expect(() => formDataSchema.parse(completeData)).not.toThrow();
    });

    it('should require all mandatory fields', () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        // Missing birth, gender, country, email, password
      };

      expect(() => formDataSchema.parse(invalidData)).toThrow();
    });
  });

  describe('Individual Field Validation', () => {
    it('should validate email format', () => {
      const emailSchema = z.object({
        email: formDataSchema.shape.email,
      });

      expect(() => emailSchema.parse({ email: 'invalid-email' })).toThrow(
        'Invalid email address'
      );
      expect(() =>
        emailSchema.parse({ email: 'test@example.com' })
      ).not.toThrow();
    });

    it('should validate password requirements', () => {
      const passwordSchema = z.object({
        password: formDataSchema.shape.password,
      });

      // Too short
      expect(() => passwordSchema.parse({ password: 'short' })).toThrow(
        'Password must be at least 8 characters long'
      );

      // Valid password
      expect(() =>
        passwordSchema.parse({ password: 'SecurePass123!' })
      ).not.toThrow();
    });

    it('should validate required string fields', () => {
      const firstNameSchema = z.object({
        firstName: formDataSchema.shape.firstName,
      });

      expect(() => firstNameSchema.parse({ firstName: '' })).toThrow(
        'This field is required'
      );
      expect(() => firstNameSchema.parse({ firstName: 'John' })).not.toThrow();
    });

    it('should validate date field', () => {
      const birthSchema = z.object({
        birth: formDataSchema.shape.birth,
      });

      expect(() =>
        birthSchema.parse({ birth: new Date('3000-01-01') })
      ).not.toThrow();
    });

    it('should validate gender enum', () => {
      const genderSchema = z.object({
        gender: formDataSchema.shape.gender,
      });

      expect(() => genderSchema.parse({ gender: 'invalid' })).toThrow();
      expect(() => genderSchema.parse({ gender: 'male' })).not.toThrow();
      expect(() => genderSchema.parse({ gender: 'female' })).not.toThrow();
    });
  });
});
