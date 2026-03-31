import type { FormData } from "../types/form";
import type { ValidationErrors } from "../types/validation";
 
interface Step1Props {
  data: FormData["step1"];
  errors: ValidationErrors;
  onChange: (field: keyof FormData["step1"], value: string) => void;
}
 
export const Step1Data = ({ data, errors, onChange }: Step1Props) => {
  const inputClass = (field: string) =>
    `w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
        : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    }`;
 
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Personal Info</h2>
      <p className="text-sm text-gray-500 mb-6">Step 1 of 3</p>
 
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              value={data.firstName}
              placeholder="John"
              onChange={(event) => onChange("firstName", event.target.value)}
              className={inputClass("firstName")}
            />
            {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
          </div>
 
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              value={data.lastName}
              placeholder="Doe"
              onChange={(event) => onChange("lastName", event.target.value)}
              className={inputClass("lastName")}
            />
            {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
          </div>
        </div>
 
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            placeholder="john@example.com"
            onChange={(event) => onChange("email", event.target.value)}
            className={inputClass("email")}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>
 
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            placeholder="+380 (XX) XXX-XX-XX"
            onChange={(event) => onChange("phone", event.target.value)}
            className={inputClass("phone")}
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>
 
        <div className="flex flex-col gap-1.5">
          <label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
            Date of birth <span className="text-red-500">*</span>
          </label>
          <input
            id="dateOfBirth"
            type="date"
            value={data.dateOfBirth}
            onChange={(event) => onChange("dateOfBirth", event.target.value)}
            className={inputClass("dateOfBirth")}
          />
          {errors.dateOfBirth && <p className="text-xs text-red-500">{errors.dateOfBirth}</p>}
        </div>
      </div>
    </div>
  );
};