import { useState } from 'react';
import { StepIndicator } from './components/StepIndicator';
import { MultiStepForm } from './components/MultiStepForm';

export const App = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <main className="min-h-screen bg-[#f8f7f3] flex flex-col items-center py-10 px-4">
      <header className="w-full max-w-[420px] mb-8">
        <StepIndicator currentStep={currentStep} />
      </header>

      <section className="w-full max-w-[480px] bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
        <MultiStepForm currentStep={currentStep} />
      </section>
    </main>
  );
};