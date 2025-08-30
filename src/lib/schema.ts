import { z } from 'zod';

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg'];
const GENDER_TYPES = ['male', 'female'];

export const formDataSchema = z.object({
  firstName: z.string().trim().min(1, 'This field is required'),
  lastName: z.string().trim().min(1, 'This field is required'),
  birth: z.date({
    error: 'This field is required',
  }),
  email: z.email().min(1, 'This field is required'),
  gender: z.enum(GENDER_TYPES, {
    error: 'This field is required',
  }),
  country: z.string().trim().min(1, 'This field is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  avatar: z.optional(
    z
      .instanceof(File)
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        // Max size: 5MB
        message: 'Image size must be less than 5MB',
      })
      .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
        message: 'Only PNG, JPEG images are allowed',
      })
  ),
});
