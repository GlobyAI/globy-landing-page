import React, { useState } from 'react'
import { ISignUpFormData } from '../services/services'
import { ErrorValidation, signUpFormValidation } from '../helpers/validation'

type Props = {
  initialValues: ISignUpFormData
}

export default function useForm({ initialValues }: Props) {
  const [formData, setFormData] = useState<ISignUpFormData>(initialValues)
  const [errors, setErrors] = useState<ErrorValidation>({})
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSuccess) {
      setIsSuccess(false)
    }
    const { name, value } = e.target
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    // Validate form
    const errorMsgs = signUpFormValidation(formData)
    if (Object.keys(errorMsgs).length > 0) {
      setErrors(errorMsgs)
      return
    }

    // // If there are errors, set them in the state
    // const res = await signUp(formData)
    // setIsSuccess(true)
    // setFormData(initialValues)

    // If there are no errors, call the signUp function
  }

  return {
    values: formData,
    errors,
    isSuccess,
    handleChange,
    handleSubmit,
    isLoading: false,
  }
}
