import type { FormData } from "../types/form";
import type { ValidationErrors } from "../types/validation";

interface Step3Props {
  data: FormData["step3"];
  errors: ValidationErrors;
  onChange: (field: keyof FormData["step3"], value: boolean) => void;
}

export const Step3Confirmation = ({ data, errors, onChange }: Step3Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Confirmation</h2>
      <p className="text-sm text-gray-500 mb-6">Step 3 of 3</p>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={data.agreeTerms}
              onChange={(event) => onChange("agreeTerms", event.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer"
            />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">Terms and Conditions</a>{" "}
              <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-xs text-red-500 ml-7">{errors.agreeTerms}</p>
          )}
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.subscribe}
            onChange={(event) => onChange("subscribe", event.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer"
          />
          <span className="text-sm text-gray-700">Subscribe to newsletter</span>
        </label>
      </div>
    </div>
  );
};