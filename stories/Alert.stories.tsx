import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert } from '../src';
import { ColorVariant } from '../src/types';
import { Button} from '../src/components/Button'



export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Alert',
  component: Alert,
  args: {
    //👇 Now all Button stories will be primary.
   labelButtonOne:'Small button',
   labelButtonTwo:'Small button'
  },
  argTypes: {
    variant: {
      options: ['default','primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
   labelButtonOne:{ type:'string' },
   labelButtonTwo:{ type:'string' }
  }
} as ComponentMeta<typeof Alert>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

//👇 Each story then reuses that template
export const Default = ()=>{

  const [showAlert,setShowAlert] =  useState(false)
  return (
      <div>
        <Alert
         showAlert={showAlert} 
         onHiden={()=> setShowAlert(false)} 
         onClickOne={()=> alert("Clicou")}  
         onClickTwo={()=> alert("Clicou")} text="Main Feedback Indicator" 
         onAlertBorderBottom />
        <Button 
          label="Clique aqui para abrir o alert" 
          onClick={()=> setShowAlert(true)} 
          variant="primary" />
      </div>
  )
}
export const Success = ()=>{

  const [showAlert,setShowAlert] =  useState(false)

  return (
      <div>
        <Alert 
          title='Success'
          showAlert={showAlert} 
          onHiden={()=> setShowAlert(false)} 
          variant="success"
          text="This is an success message"  
          onAlertBorderBottom
           />
        <Button 
          label="Clique aqui para abrir o alert" 
          onClick={()=> setShowAlert(true)} 
          variant="success"
           />
      </div>
  )
}
export const Danger = ()=>{

  const [showAlert,setShowAlert] =  useState(false)

  return (
      <div>
        <Alert 
          title='Danger'
          showAlert={showAlert} 
          onHiden={()=> setShowAlert(false)} 
          onClickTwo={()=> alert("Clicou")} 
          variant="danger"
          text="This is an example of the info alert" />
        <Button 
          label="Clique aqui para abrir o alert" 
          onClick={()=> setShowAlert(true)} 
          variant="danger"
          />
      </div>
  )
}

export const Warning = ()=>{

  const [showAlert,setShowAlert] =  useState(false)

  return (
      <div>
        <Alert 
          title='Warning'
          showAlert={showAlert} 
          onHiden={()=> setShowAlert(false)} 
          variant="warning" 
          text="This is an example of the info alert" 
          />
        <Button 
          label="Clique aqui para abrir o alert" 
          onClick={()=> setShowAlert(true)} 
          variant="warning"
           />
      </div>
  )
}
export const Info = ()=>{

  const [showAlert,setShowAlert] =  useState(false)

  return (
      <div>
        <Alert 
          title='Info'
          showAlert={showAlert} 
          onHiden={()=> setShowAlert(false)} 
          variant="info"
          onClickOne={()=> alert("Clicou")} 
          onClickTwo={()=> alert("Clicou")} 
          text="This is an example of the info alert" 
          onAlertBorderBottom 
          />
        <Button 
          label="Clique aqui para abrir o alert" 
          onClick={()=> setShowAlert(true)} 
          variant="info"
          />
      </div>
  )
}
