'use client'
import ErrorIcon from 'public/icons/error.svg'
import IndustryIcon from 'public/icons/industry.svg'
import IndustryErrorIcon from 'public/icons/industry-error.svg'
import { useCallback, useState } from 'react'

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
  const [search, setSearch] = useState('')
  let selectClassName = 'select-box'
  if (error) {
    selectClassName += ` error`
  }

  const selectedValue =
    value !== '' ? options.find((item) => item.value === value) : null

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filteredOptions = useCallback(() => {
    if (search === '') {
      return options
    }
    return options.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase()),
    )
  }, [search, options])
  return (
    <fieldset className={selectClassName}>
      <label className={`dropdown `} htmlFor="industry-select-box">
        <input type="checkbox" id="industry-select-box" hidden />
        <div id="overlay"></div>
        <div className="dropdown__icon">
          {error ? <IndustryErrorIcon /> : <IndustryIcon />}
        </div>
        <div id="dropdown-btn">
          {value === '' ? 'Select industry' : selectedValue?.label}
        </div>
        <div id="dropdown-content">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            className="dropdown-content__search-bar"
            onChange={handleSearch}
          />
          <ul>
            {filteredOptions().map((item) => (
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
