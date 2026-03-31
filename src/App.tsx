import { useState } from "react";
import { StepIndicator } from "./components/StepIndicator";
import { MultiStepForm } from "./components/MultiStepForm";
import { ButtonBack, ButtonNext, ButtonSubmit } from "./components/Button";
import type { FormData } from "./types/form";

const initialFormData: FormData = {
  step1: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  },
  step2: {
    country: "",
    city: "",
    streetAddress: "",
    zipCode: "",
  },
  step3: {
    agreeTerms: false,
    subscribe: false,
  },
};

export const App = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <main className="min-h-screen bg-[#f8f7f3] flex flex-col items-center py-10 px-4">
      <header className="w-full max-w-[420px] mb-8">
        <StepIndicator currentStep={currentStep} />
      </header>

      <section className="w-full max-w-[480px] bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
        <MultiStepForm
          currentStep={currentStep}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />

        <div className="flex justify-between w-full mt-8">
          {currentStep > 1 ? <ButtonBack onClick={handleBack} /> : <div />}
          {currentStep < 3 && <ButtonNext onClick={handleNext} />}
          {currentStep === 3 && <ButtonSubmit />}
        </div>
      </section>
    </main>
  );
};
