import type { FormData } from "../types/form";
 
interface Step1Props {
  data: FormData["step1"];
  onChange: (field: keyof FormData["step1"], value: string) => void;
}
 
export const Step1Data = ({ data, onChange }: Step1Props) => {
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
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
            />
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
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
            />
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
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
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
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
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
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};
 