import { css } from '@emotion/react'
import { useState } from 'react'
import { PlaygroundWrapper } from '../../layout/PlaygroundWrapper'
import { ComboField, FieldOption } from './ComboField'

const options: FieldOption[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Something that wraps because it is long', value: 'longvalue' },
]

const demoWrapperStyle = css`
  margin-block: 15rem; // add space above to show menu in diff positions
  min-height: 400px;
`

export default function Demo() {
  const [selectedValue, setSelectedValue] = useState<FieldOption | null>(null)

  function handleSearch(query: string): Promise<FieldOption[]> {
    const data = options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    )
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 250)
    })
  }

  function onSelect(option: FieldOption) {
    setSelectedValue(option)
  }

  // comment out asyncSearch and options props to test between the two
  return (
    <PlaygroundWrapper title="Carousel Example">
      <div css={demoWrapperStyle}>
        <ComboField
          asyncSearch={handleSearch}
          label="Test label"
          onSelect={onSelect}
          // options={options}
          value={selectedValue}
        />
      </div>
    </PlaygroundWrapper>
  )
}
