import { useFormContext } from 'react-hook-form';
import { type FormValues } from '@/types/form.types';
import { format } from 'date-fns';

export default function ConfirmationPage() {
  const { watch } = useFormContext<FormValues>();
  const formData = watch();

  return (
    <>
      <h1 className="my-3 md:mt-8">Confirmation</h1>
      <p className="mb-5 md:mb-8">
        Please review your information before submitting.
      </p>
      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">
              Basic Information
            </h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">First Name:</span>{' '}
                {formData.firstName || 'Not provided'}
              </p>
              <p>
                <span className="font-medium">Last Name:</span>{' '}
                {formData.lastName || 'Not provided'}
              </p>
              <p>
                <span className="font-medium">Date of Birth:</span>{' '}
                {formData.birth
                  ? format(formData.birth, 'PPP')
                  : 'Not provided'}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-3">
              Personal Details
            </h3>
            <div className="space-y-2">
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
              <p>
                <span className="font-medium">Avatar:</span>{' '}
                {formData.avatar ? formData.avatar.name : 'Not uploaded'}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-3">
            Account Information
          </h3>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Email:</span>{' '}
              {formData.email || 'Not provided'}
            </p>
            <p>
              <span className="font-medium">Password:</span>{' '}
              {formData.password ? '••••••••' : 'Not provided'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
