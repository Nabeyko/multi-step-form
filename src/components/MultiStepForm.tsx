import { useState } from "react";
import { Step1Data } from "../steps/Step1";
import { Step2Address } from "../steps/Step2";
import { Step3Confirmation } from "../steps/Step3";
import { validateStep1, validateStep2, validateStep3 } from "../types/validation";
import type { ValidationErrors } from "../types/validation";
import type { FormData } from "../types/form";
import { ButtonNext, ButtonBack, ButtonSubmit } from "./Buttons";
 
interface MultiStepFormProps {
  currentStep: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}
 
export const MultiStepForm = ({
  currentStep,
  formData,
  setFormData,
  onNext,
  onBack,
  onSubmit,
}: MultiStepFormProps) => {
  const [errors, setErrors] = useState<ValidationErrors>({});
 
  const handleNext = () => {
    let newErrors: ValidationErrors = {};
 
    if (currentStep === 1) newErrors = validateStep1(formData.step1);
    if (currentStep === 2) newErrors = validateStep2(formData.step2);
 
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
 
    setErrors({});
    onNext();
  };
 
  const handleBack = () => {
    setErrors({});
    onBack();
  };
 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateStep3(formData.step3);
 
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
 
    setErrors({});
    onSubmit();
  };
 
  return (
    <form onSubmit={handleSubmit} noValidate>
      {currentStep === 1 && (
        <Step1Data
          data={formData.step1}
          errors={errors}
          onChange={(field, value) => {
            setErrors((prev) => ({ ...prev, [field]: "" }));
            setFormData((prev) => ({
              ...prev,
              step1: { ...prev.step1, [field]: value },
            }));
          }}
        />
      )}
      {currentStep === 2 && (
        <Step2Address
          data={formData.step2}
          errors={errors}
          onChange={(field, value) => {
            setErrors((prev) => ({ ...prev, [field]: "" }));
            setFormData((prev) => ({
              ...prev,
              step2: { ...prev.step2, [field]: value },
            }));
          }}
        />
      )}
      {currentStep === 3 && (
        <Step3Confirmation
          data={formData.step3}
          errors={errors}
          onChange={(field, value) => {
            setErrors((prev) => ({ ...prev, [field]: "" }));
            setFormData((prev) => ({
              ...prev,
              step3: { ...prev.step3, [field]: value },
            }));
          }}
        />
      )}
 
      <div className="flex justify-between w-full mt-8">
        {currentStep > 1 ? (
          <ButtonBack onClick={handleBack} />
        ) : (
          <div />
        )}
 
        {currentStep < 3 && (
          <ButtonNext onClick={handleNext} />
        )}
 
        {currentStep === 3 && (
          <ButtonSubmit />
        )}
      </div>
    </form>
  );
};