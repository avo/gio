import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useDebounce } from '../../../hooks/useDebounce'

const labelStyle = css`
  display: block;
`

const comboFieldWrapperStyle = css`
  position: relative;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scaleY(0.25); /* 25% of the height */
    }
    to {
      opacity: 1;
      transform: scaleY(1); /* full height */
    }
  }
`

const comboFieldStyle = css`
  border: 1px solid var(--av-color-tertiary-border);
  border-radius: var(--av-border-radius-sm);
  min-width: 6rem;
  padding: 0.5rem;
`

const menuStyle = css`
  background-color: var(--av-color-tertiary-bg);
  border: 1px solid var(--av-color-tertiary-border); // use colors in the same family for menus and popovers
  border-radius: var(--av-border-radius-sm);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  position: absolute;
  transform-origin: top;
  width: 12rem;
  z-index: var(--av-zindex-layout-popover); // use a z-index system

  @media (prefers-reduced-motion: no-preference) {
    animation: fade-in 0.3s ease-in-out; // or use forwards vs ease-in-out
  }
`

const menuListStyle = css`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    border-bottom: 1px solid var(--av-color-tertiary-border);
    cursor: pointer;
    padding-block: 0.5rem;
    padding-inline: 1rem;
  }

  li:hover,
  li:focus {
    background-color: var(--av-color-primary-bg-hover);
  }

  li:last-child {
    border-bottom: none;
  }
`

export function ComboField({ asyncSearch, label, onSelect, options }: ComboFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [inputValue, setInputValue] = useState('') // controlled input value
  const [open, setOpen] = useState(false)
  const defaultOptions = options?.length ? options.slice(0, 10) : []
  const [filteredOptions, setFilteredOptions] = useState<FieldOption[]>(defaultOptions)

  const debounceValue = useDebounce(inputValue, 200)
  const [menuPosition, setMenuPosition] = useState<'bottom' | 'top'>('bottom')

  function onFocus(event: React.FocusEvent<HTMLInputElement>) {
    setOpen(true)
    setMenuPosition(calcMenuPosition(event.target))
  }

  function handleScroll() {
    if (inputRef.current) {
      setMenuPosition(calcMenuPosition(inputRef.current))
    }
  }

  function onBlur() {
    setOpen(false)
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('input changed: ', event?.target.value)
    setInputValue(event?.target.value)
  }

  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      console.log('escape key')
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  function onSelectOption(option: FieldOption) {
    setInputValue(option.label)
    onSelect(option)
    setOpen(false)
    inputRef.current?.blur()
  }

  function calcMenuPosition(inputElement: HTMLElement): 'bottom' | 'top' {
    const viewportHeight = window.innerHeight
    const inputBottom = inputElement.getBoundingClientRect().bottom
    const menuHeight = menuRef.current?.getBoundingClientRect().height || 200
    return inputBottom > viewportHeight - menuHeight ? 'top' : 'bottom'
  } // 200 is a best guess for the height of the menu

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // run once on mount and clean up on unmount

  useEffect(() => {
    const fetchData = async () => {
      if (debounceValue) {
        let filtered: FieldOption[] = []
        if (options) {
          filtered =
            options?.filter((option) =>
              option.label.toLowerCase().includes(debounceValue.toLowerCase())
            ) || []
        } else if (asyncSearch) {
          filtered = await asyncSearch(debounceValue)
        }
        setFilteredOptions(filtered)
      } else {
        setFilteredOptions(defaultOptions)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue])

  // Research ARIA Authoring Practices Guide for combobox
  // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
  return (
    <div css={comboFieldWrapperStyle} onBlur={onBlur}>
      <label css={labelStyle} htmlFor="comboField">
        {label}
      </label>
      <input
        ref={inputRef}
        autoComplete="off"
        css={comboFieldStyle}
        id="comboField"
        onBlur={onBlur}
        onChange={onInputChange}
        onFocus={onFocus}
        placeholder="Search for names.."
        type="text"
        value={inputValue}
      />
      {open && filteredOptions.length > 0 && (
        <div
          ref={menuRef}
          css={menuStyle}
          style={{
            bottom: menuPosition === 'top' ? '100%' : 'auto',
            top: menuPosition === 'bottom' ? '100%' : 'auto',
          }}
        >
          <ul css={menuListStyle} role="listbox">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  onSelectOption(option)
                }}
                onMouseDown={(e) => e.preventDefault()}
                role="option"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export interface FieldOption {
  label: string
  value: string
}

interface ComboFieldProps {
  asyncSearch?: (query: string) => Promise<FieldOption[]>
  label: string
  onSelect: (option: FieldOption) => void
  options?: FieldOption[]
  value?: FieldOption | null
}
