import { useFormContext } from 'react-hook-form';
import { type FormValues } from '@/types/form.types';
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function AccountPage() {
  const { control } = useFormContext<FormValues>();

  return (
    <>
      <h1 className="my-3 md:mt-8">Account Information</h1>
      <p className="mb-5 md:mb-8">
        Please provide your email address and create a secure password.
      </p>
      <div className="space-y-8">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Email Address
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g. rossgeller@lorem.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Password
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="At least 8 characters"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
