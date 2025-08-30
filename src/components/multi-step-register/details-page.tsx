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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function DetailsPage() {
  const { control } = useFormContext<FormValues>();

  return (
    <>
      <h1 className="my-3 md:mt-8">Personal Details</h1>
      <p className="mb-5 md:mb-8">
        Please provide your country, gender, and optionally upload an avatar
        picture.
      </p>
      <div className="space-y-8">
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Country
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g. United States" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Gender
                <FormMessage />
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="avatar"
          render={({ field: { onChange } }) => (
            <FormItem>
              <FormLabel>Avatar (Optional)</FormLabel>
              <FormControl>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
