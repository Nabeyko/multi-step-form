import { Step1Data } from "../steps/Step1";
import { Step2Address } from "../steps/Step2";
import { Step3Confirmation } from "../steps/Step3";

export const MultiStepForm = ({ currentStep }: { currentStep: number }) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      {currentStep === 1 && <Step1Data />}
      {currentStep === 2 && <Step2Address />}
      {currentStep === 3 && <Step3Confirmation />}
    </form>
  );
};