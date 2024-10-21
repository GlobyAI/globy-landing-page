export interface ISignUpFormData {
  email: string
  industry: string
  full_name: string
}

const API_URL =
  'https://gtznj0d9mj.execute-api.eu-west-1.amazonaws.com/Stage/signup'

export const signUp = async (formData: ISignUpFormData) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY || '',
    },
    body: JSON.stringify(formData),
  })
  return await res.json()
}
