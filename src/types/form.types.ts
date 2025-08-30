import { formDataSchema } from '@/lib/schema';
import { z } from 'zod';

type FormValues = z.infer<typeof formDataSchema>;

type Step = {
  id: `step-${number}`;
  name: string;
  fields: (keyof FormValues)[];
};

type Steps = [{ id: 'complete'; name: 'Complete'; fields: [] }, ...Step[]];

export type { FormValues, Step, Steps };
