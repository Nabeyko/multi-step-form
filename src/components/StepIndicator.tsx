import cn from "classnames";

export const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [1, 2, 3];
  
  return (
    <div className="flex items-center justify-center w-full">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center font-medium",
              {
                "bg-blue-600 text-white": currentStep === step,
                "bg-gray-200 text-gray-500": currentStep !== step,
              },
            )}
          >
            {step}
          </div>

          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-10 h-[2px] mx-2 transition-colors duration-300",
                currentStep > step ? "bg-[#3b82f6]" : "bg-[#e5e7eb]",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};
