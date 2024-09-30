'use client'
import './TextField.scss'
import Image from 'next/image'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  helperText?: string
  borderless?: boolean
}
const TextField = (props: TextFieldProps) => {
  const { className, label, id, error, helperText, value, ...rest } = props

  let textfieldClassName = 'text-field'
  if (error && helperText !== '') {
    textfieldClassName += ` error`
  }
  if (error === false && helperText == undefined) {
    textfieldClassName += ` success`
  }
  if (className) {
    textfieldClassName += ` ${className}`
  }

  if (value) {
    textfieldClassName += ` filled`
  }

  return (
    <fieldset className={textfieldClassName}>
      <input id={id} value={value} {...rest} />

      {label && (
        <label htmlFor={id}>
          <p>{label}</p>
        </label>
      )}
      {error && helperText && (
        <small className="textfield__error">
          <Image
            src="/icons/error.svg"
            alt="error-icon"
            width={18}
            height={18}
          />
          {helperText}
        </small>
      )}
    </fieldset>
  )
}

export default TextField
