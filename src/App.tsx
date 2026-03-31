import { useState } from "react";
import { StepIndicator } from "./components/StepIndicator";
import type { FormData } from "./types/form";
import { MultiStepForm } from "./components/MultiStepForm";

const initialFormData: FormData = {
  step1: { firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "" },
  step2: { country: "", city: "", streetAddress: "", zipCode: "" },
  step3: { agreeTerms: false, subscribe: false },
};

export const App = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

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
          onNext={() => setCurrentStep((prev) => Math.min(prev + 1, 3))}
          onBack={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          onSubmit={() => console.log(JSON.stringify(formData, null, 2))}
        />
      </section>
    </main>
  );
};
