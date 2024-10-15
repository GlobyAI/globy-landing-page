import { useState, useTransition } from 'react'
import { ISignUpFormData, signUp } from '../services'
import { ErrorValidation, signUpFormValidation } from '../helpers/validation'

type Props = {
  initialValues: ISignUpFormData
}

export default function useForm({ initialValues }: Props) {
  const [formData, setFormData] = useState<ISignUpFormData>(initialValues)
  const [errors, setErrors] = useState<ErrorValidation>({})
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [msg, setMsg] = useState<string>('')
  const [isPending, startTransition] = useTransition()
  const handleChange = (name: string, value: string) => {
    if (isSuccess) {
      setIsSuccess(false)
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    startTransition(async () => {
      const errorMsgs = signUpFormValidation(formData)
      if (Object.keys(errorMsgs).length > 0) {
        setErrors(errorMsgs)
        return
      }
      // // If there are errors, set them in the state
      const res = await signUp(formData)

      if (res.message === 'Success') {
        setIsSuccess(true)
        setFormData(initialValues)
      } else {
        setMsg(res.message)
      }
    })
  }

  return {
    values: formData,
    errors,
    isSuccess,
    handleChange,
    handleSubmit,
    isPending: isPending,
    msg,
  }
}
