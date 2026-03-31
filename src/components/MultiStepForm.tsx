import { Step1Data } from "../steps/Step1";
import { Step2Address } from "../steps/Step2";
import { Step3Confirmation } from "../steps/Step3";
import type { FormData } from "../types/form";

interface MultiStepFormProps {
  currentStep: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const MultiStepForm = ({
  currentStep,
  formData,
  setFormData,
  onSubmit,
}: MultiStepFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {currentStep === 1 && (
        <Step1Data
          data={formData.step1}
          onChange={(field, value) =>
            setFormData((prev) => ({
              ...prev,
              step1: { ...prev.step1, [field]: value },
            }))
          }
        />
      )}
      {currentStep === 2 && <Step2Address />}
      {currentStep === 3 && <Step3Confirmation />}
    </form>
  );
};
