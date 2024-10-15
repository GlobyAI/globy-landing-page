'use client'
import ErrorIcon from 'public/icons/error.svg'
import IndustryIcon from 'public/icons/industry.svg'
import IndustryErrorIcon from 'public/icons/industry-error.svg'

type Option = {
  value: string
  label: string
}

interface SelectBoxProps {
  value: string
  error?: boolean
  message?: string
  options: Option[]
  onSelect: (name: string, value: string) => void
}

function SelectBox(props: SelectBoxProps) {
  const { error, message, value, options = [], onSelect } = props
  let selectClassName = 'select-box'
  if (error) {
    selectClassName += ` error`
  }

  const selectedValue =
    value !== '' ? options.find((item) => item.value === value) : null

  return (
    <fieldset className={selectClassName}>
      <label className={`dropdown `} htmlFor="industry-select-box">
        <input type="checkbox" id="industry-select-box" hidden />
        <div id="overlay"></div>
        <div className="dropdown__icon">
          {error ? <IndustryErrorIcon /> : <IndustryIcon />}
        </div>
        <div id="dropdown-btn">
          {value === '' ? 'Select' : selectedValue?.label}
        </div>
        <div id="dropdown-content">
          <ul>
            {options.map((item) => (
              <li
                className={`item ${value === item.value ? 'selected' : ''}`}
                key={item.label}
                onClick={() => onSelect('industry', item.value as string)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </label>
      {error && (
        <small className="dropdown-error">
          <ErrorIcon />
          {message}
        </small>
      )}
    </fieldset>
  )
}

export default SelectBox
