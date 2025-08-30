import { useFormContext } from 'react-hook-form';
import { type FormValues } from '@/types/form.types';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ConfirmationPage() {
  const { watch } = useFormContext<FormValues>();
  const formData = watch();

  // Create full name from first and last name
  const fullName =
    `${formData.firstName || ''} ${formData.lastName || ''}`.trim() ||
    'Not provided';

  return (
    <div className="space-y-6 mx-auto max-w-2xl">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage
            src={
              formData.avatar
                ? URL.createObjectURL(formData.avatar)
                : 'https://github.com/shadcn.png'
            }
            alt="Profile Avatar"
          />
          <AvatarFallback>
            {formData.firstName?.[0]}
            {formData.lastName?.[0]}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold text-center">{fullName}</h1>
      </div>

      <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Personal Details
              </h3>
              <div className="space-y-1">
                <p>
                  <span className="font-medium">Date of Birth:</span>{' '}
                  {formData.birth
                    ? format(formData.birth, 'PPP')
                    : 'Not provided'}
                </p>
                <p>
                  <span className="font-medium">Country:</span>{' '}
                  {formData.country || 'Not provided'}
                </p>
                <p>
                  <span className="font-medium">Gender:</span>{' '}
                  {formData.gender
                    ? formData.gender.charAt(0).toUpperCase() +
                      formData.gender.slice(1)
                    : 'Not provided'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Account Information
              </h3>
              <div className="space-y-1">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  {formData.email || 'Not provided'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
