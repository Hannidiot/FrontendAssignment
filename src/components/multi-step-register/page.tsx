import { formDataSchema } from '@/lib/schema';
import { type FormValues, type Steps } from '@/types/form.types';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import BasicInfoPage from './basic-info-page';
import DetailsPage from './details-page';
import AccountPage from './account-page';
import ConfirmationPage from './confirmation-page';

const steps: Steps = [
  { id: 'complete', name: 'Complete', fields: [] },
  {
    id: 'step-1',
    name: 'Basic Info',
    fields: ['firstName', 'lastName', 'birth'],
  },
  {
    id: 'step-2',
    name: 'Details',
    fields: ['gender', 'country', 'avatar'],
  },
  { id: 'step-3', name: 'Account', fields: ['email', 'password'] },
  { id: 'step-4', name: 'Summary', fields: [] },
];

const LAST_STEP = steps.length - 1;
const COMPLETE_STEP = 0;

export default function MultiStepRegister() {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      password: '',
    },
    resolver: zodResolver(formDataSchema),
  });

  const onSubmit = useCallback((data: FormValues) => {
    const processedData = {
      ...data,
      media: {
        fileName: data.avatar?.name || 'No file uploaded',
      },
    };
    console.log(`registration data: ${JSON.stringify(processedData, null, 2)}`);

    toast.success('Registration submitted successfully!');
    setCurrentStep(COMPLETE_STEP);
  }, []);

  const handleNav = async (index: number) => {
    let isValid = true;
    let failedStep = currentStep;
    for (let i = currentStep; i < index && isValid; i++) {
      isValid = await form.trigger(steps[i].fields);

      if (!isValid) {
        failedStep = i;
      }
    }
    if (isValid) {
      setCurrentStep(index);
    } else {
      setCurrentStep(failedStep);
    }
  };

  return (
    <>
      <div className="bg-sidebar-mobile w-full h-full bg-contain bg-top bg-no-repeat top-0 fixed flex md:hidden" />
      {/* Steps - mobile */}
      <div className="flex my-5 space-x-4 md:hidden">
        {steps.map(
          (step, index) =>
            index !== COMPLETE_STEP && (
              <div className="z-20 my-3 ml-2 flex items-center" key={step.id}>
                <Button
                  className={`size-9 rounded-full border font-bold ${
                    currentStep === index
                      ? 'bg-brand-pastel-blue text-brand-marine-blue'
                      : 'text-brand-alabaster'
                  }`}
                  disabled={
                    `step-${currentStep}` === step.id ||
                    currentStep === COMPLETE_STEP
                  }
                  onClick={() => handleNav(index)}
                >
                  {index}
                </Button>
              </div>
            )
        )}
      </div>
      <div className="z-10 w-full max-w-[500px] md:max-w-[1050px] p-4">
        <div className="bg-white flex md:h-min md:min-h-[600px] rounded-xl md:rounded-2xl p-4 shadow-xl">
          {/* Steps - desktop */}
          <div className="hidden md:visible md:flex flex-col rounded-xl min-w-[274px] bg-sidebar-desktop bg-cover bg-bottom bg-no-repeat p-5 pt-7">
            {steps.map(
              (step, index) =>
                index !== COMPLETE_STEP && (
                  <div className="my-3 ml-2 flex items-center" key={step.id}>
                    <Button
                      className={`size-8 border rounded-full text-sm font-bold ${
                        currentStep === index
                          ? 'bg-brand-pastel-blue text-brand-marine-blue'
                          : 'text-brand-alabaster'
                      }`}
                      disabled={
                        `step-${currentStep}` === step.id ||
                        currentStep === COMPLETE_STEP
                      }
                      onClick={() => handleNav(index)}
                    >
                      {index}
                    </Button>
                    <div className="flex flex-col items-baseline uppercase ml-5">
                      <span className="text-xs text-brand-light-gray">
                        Step {index}
                      </span>
                      <span className="font-bold tracking-wider text-brand-alabaster">
                        {step.name}
                      </span>
                    </div>
                  </div>
                )
            )}
          </div>
          {/* Form */}
          <Form {...form}>
            <form
              className="flex grow flex-col px-4 md:px-12 lg:px-24"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {currentStep === 1 && <BasicInfoPage />}
              {currentStep === 2 && <DetailsPage />}
              {currentStep === 3 && <AccountPage />}
              {currentStep === 4 && <ConfirmationPage />}

              <div className="fixed md:static bottom-0 left-0 right-0 flex w-full justify-between items-center bg-white px-5 py-3 md:mb-4 md:mt-auto md:p-0 md:pt-4">
                <Button
                  disabled={currentStep === 1 || currentStep === COMPLETE_STEP}
                  type="button"
                  className="shadow-none flex w-min text-nowrap text-base font-medium text-brand-cool-gray hover:text-brand-marine-blue disabled:invisible"
                  onClick={() => {
                    handleNav(currentStep - 1);
                  }}
                >
                  Go Back
                </Button>
                <Button
                  disabled={
                    currentStep === LAST_STEP || currentStep === COMPLETE_STEP
                  }
                  type="button"
                  className="flex w-min bg-brand-marine-blue hover:bg-blue-900 rounded-md md:rounded-lg h-12 px-6 text-base font-medium text-brand-magnolia disabled:hidden"
                  onClick={() => {
                    handleNav(currentStep + 1);
                  }}
                >
                  Next Step
                </Button>
                <Button
                  disabled={currentStep !== LAST_STEP}
                  type="submit"
                  className="flex w-min rounded-md bg-brand-purplish-blue h-12 px-7 text-base font-medium text-brand-magnolia hover:opacity-70 disabled:hidden md:rounded-lg"
                >
                  Confirm
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
