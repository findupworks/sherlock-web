import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MultiSelect } from '../src';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/MultiSelect',
  component: MultiSelect,

  args: {
    //π Now all Button stories will be primary.
    options:[
      { value: 'Chocolate', label: 'Chocolate' },
      { value: 'Strawberry', label: 'Strawberry' },
      { value: 'Vanilla', label: 'Vanilla' },
    ],
   isDisabled:false,
   isLoading:false,
   labelButton:'SELECT'
  },
  argTypes: {
    isDisabled:{control:'boolean'},
    isLoading:{control:'boolean'},
    labelButton:{type:'string'}
  
  }
} as ComponentMeta<typeof MultiSelect>;


//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof MultiSelect> = (args) => <MultiSelect {...args} />;


//π Each story then reuses that template
export const Example1 = Template.bind({});
Example1.args = {onChange:(option)=> console.log(option), onClickButton:()=> alert('clicou')};



//π Each story then reuses that template
export const Example2 = ()=>{
   const onChange   = (option)=>{
      console.log(option)
   }
   const options = [
    { value: 'Chocolate', label: 'Chocolate' },
    { value: 'Strawberry', label: 'Strawberry' },
    { value: 'Vanilla', label: 'Vanilla' },
  ]
   
  return (
    <div style={{width:'30rem'}} >
       <MultiSelect  
         onChange={onChange} 
         options={options} 
         onClickButton={(e)=> alert('Clicou')} 
         labelButton="BotΓ£o"  
        />
    </div>
  )
}
//π Each story then reuses that template
export const Example3 = ()=>{
  const onChange   = (option)=>{
    console.log(option)
  }
  const options = [
   { value: 'Chocolate', label: 'Chocolate' },
   { value: 'Strawberry', label: 'Strawberry' },
   { value: 'Vanilla', label: 'Vanilla' },
  ]
  
 return (
   <div style={{width:'30rem'}}>
      <MultiSelect 
        onChange={onChange} 
        options={options} 
        />
   </div>
 )
}

