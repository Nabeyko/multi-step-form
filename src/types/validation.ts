import type { FormData } from "./form";
 
export type ValidationErrors = Record<string, string>;
 
export const validateStep1 = (data: FormData["step1"]): ValidationErrors => {
  const errors: ValidationErrors = {};
 
  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
 
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
 
  if (!data.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^\+?[\d\s\-()]{7,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }
 
  if (!data.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
 
  return errors;
};
 
export const validateStep2 = (data: FormData["step2"]): ValidationErrors => {
  const errors: ValidationErrors = {};
 
  if (!data.country) errors.country = "Country is required";
  if (!data.city.trim()) errors.city = "City is required";
 
  return errors;
};
 
export const validateStep3 = (data: FormData["step3"]): ValidationErrors => {
  const errors: ValidationErrors = {};
 
  if (!data.agreeTerms) errors.agreeTerms = "You must agree to the terms";
 
  return errors;
};