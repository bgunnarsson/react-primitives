import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxCommand,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from './Combobox'

const meta = {
  title: 'Primitives/Combobox',
  component: Combobox,
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    return (
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger
          style={{
            padding: '8px 12px',
            border: '1px solid #e5e7eb',
            borderRadius: 6,
            cursor: 'pointer',
            minWidth: 200,
          }}
        >
          {value || 'Select a fruit…'}
        </ComboboxTrigger>
        <ComboboxContent
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            background: 'white',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            width: 220,
          }}
        >
          <ComboboxCommand>
            <ComboboxInput
              placeholder="Search..."
              style={{
                padding: '8px 12px',
                width: '100%',
                border: 'none',
                borderBottom: '1px solid #e5e7eb',
                outline: 'none',
              }}
            />
            <ComboboxList style={{ maxHeight: 240, overflowY: 'auto' }}>
              <ComboboxEmpty style={{ padding: 16, textAlign: 'center', fontSize: 14, color: '#6b7280' }}>
                No results.
              </ComboboxEmpty>
              {fruits.map((fruit) => (
                <ComboboxItem
                  key={fruit}
                  value={fruit}
                  onSelect={(v) => {
                    setValue(v)
                    setOpen(false)
                  }}
                  style={{ padding: '8px 12px', cursor: 'pointer' }}
                >
                  {fruit}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxCommand>
        </ComboboxContent>
      </Combobox>
    )
  },
}
