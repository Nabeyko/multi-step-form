import type { FormData } from "../types/form";
 
interface Step2Props {
  data: FormData["step2"];
  onChange: (field: keyof FormData["step2"], value: string) => void;
}
 
const COUNTRIES = [
  "Ukraine",
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Poland",
  "Canada",
  "Australia",
  "Other",
];
 
export const Step2Address = ({ data, onChange }: Step2Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Address</h2>
      <p className="text-sm text-gray-500 mb-6">Step 2 of 3</p>
 
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="country" className="text-sm font-medium text-gray-700">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            value={data.country}
            onChange={(event) => onChange("country", event.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors bg-white"
          >
            <option value="">Select country...</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
 
        <div className="flex flex-col gap-1.5">
          <label htmlFor="city" className="text-sm font-medium text-gray-700">
            City <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            type="text"
            value={data.city}
            placeholder="Odesa"
            onChange={(event) => onChange("city", event.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
        </div>
 
        <div className="flex flex-col gap-1.5">
          <label htmlFor="streetAddress" className="text-sm font-medium text-gray-700">
            Street address
          </label>
          <input
            id="streetAddress"
            type="text"
            value={data.streetAddress}
            placeholder="123 Main St, Apt 4"
            onChange={(event) => onChange("streetAddress", event.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
        </div>
 
        <div className="flex flex-col gap-1.5">
          <label htmlFor="zipCode" className="text-sm font-medium text-gray-700">
            ZIP / Postal code
          </label>
          <input
            id="zipCode"
            type="text"
            value={data.zipCode}
            placeholder="65000"
            onChange={(event) => onChange("zipCode", event.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};