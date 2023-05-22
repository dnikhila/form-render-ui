import React from 'react'
import { Button } from '../components'
import RadioButtonsGroup from '../components/Radio'

interface FormFields {
  component: {
    type: string
    value: string
    options: any
  }
}

function Factory(props: FormFields) {
  switch (props.component.type) {
    case 'Button':
      return <Button label={''} />
    case 'Radio':
      return <RadioButtonsGroup />
    default:
      return <div>Reload...</div>
  }
}

function RenderForm(formFields: FormFields[]) {
  return (
    <div>
      {formFields.map((field, i) => {
        return (
          <div key={i}>
            <Factory component={field.component} />
          </div>
        )
      })}
    </div>
  )
}
export default RenderForm
