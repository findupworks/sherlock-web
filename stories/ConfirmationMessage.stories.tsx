import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ConfirmationMessage } from '../src';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Confirmation Message',
  component: ConfirmationMessage,
 
  args: {
    //π Now all Button stories will be primary.   
    size: 'md',
    labelButtonCancel: 'Cancelar',
    labelButtonConfirm: 'Confirmar',
    showConfirmationMessage: false,
  },
  argTypes: {
    variant: {
      options: ['default','success', 'danger', 'warning', 'info'],
      control: { type: 'select' }
    },
    size: {
      options: [ 'sm', 'md', 'lg'],
      control: 'inline-radio' 
    },
    labelButtonCancel:{type:'string'},
    labelButtonConfirm:{type:'string'},
    onCancel:{type:'function'},
    onConfirm:{type:'function'}
  }
} as ComponentMeta<typeof ConfirmationMessage>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof ConfirmationMessage> = (args) => <ConfirmationMessage {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});
Default.args = { 
  variant: 'success',
  size: 'lg',
  onConfirm: () => alert('Confirmar'),
  onCancel: () => alert('Cancelar'),
};