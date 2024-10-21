'use client'
import ErrorIcon from 'public/icons/error.svg'
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  helperText?: string
  borderless?: boolean
  icon?: React.ReactNode
}
const TextField = (props: TextFieldProps) => {
  const { className, label, id, error, helperText, value, icon, ...rest } =
    props

  let textfieldClassName = 'textfield'
  if (error && helperText !== '') {
    textfieldClassName += ` error`
  }
  if (className) {
    textfieldClassName += ` ${className}`
  }

  if (value) {
    textfieldClassName += ` filled`
  }

  return (
    <fieldset className={textfieldClassName}>
      <div className="textfield__container">
        {icon && <span className="textfield__icons">{icon}</span>}
        <input id={id} value={value} {...rest} />
        {label && (
          <label htmlFor={id} className="textfield__label">
            <p>{label}</p>
          </label>
        )}
      </div>
      {error && helperText && (
        <small className="textfield__error">
          <ErrorIcon />
          {helperText}
        </small>
      )}
    </fieldset>
  )
}

export default TextField
