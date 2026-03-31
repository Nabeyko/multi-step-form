export interface FormData {
  step1: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
  };
  step2: {
    country: string;
    city: string;
    streetAddress: string;
    zipCode: string;
  };
  step3: {
    agreeTerms: boolean;
    subscribe: boolean;
  };
}

export type FormStep = 1 | 2 | 3;