import { ISignUpFormData } from '../services/services'
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type ErrorValidation = {
  [key: string]: string
}
export const signUpFormValidation = (formData: ISignUpFormData) => {
  const errors: ErrorValidation = {}

  if (!formData.email) {
    errors.email = 'Email is required'
  }

  if (emailRegex.test(formData.email) === false) {
    errors.email = 'Email is not valid '
  }

  if (!formData.full_name) {
    errors.full_name = 'Full name is required'
  }

  if (!formData.industry) {
    errors.industry = 'Industry is required'
  }

  return errors
}
