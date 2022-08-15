import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ColorVariant } from '../src/types';
import { ConfirmationMessage } from '../src';
import { ConfirmationMessageSize } from '../src/components/ConfirmationMessage';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Confirmation Message',
  component: ConfirmationMessage,
 
  args: {
    //👇 Now all Button stories will be primary.   
    size: ConfirmationMessageSize.md,
    labelButtonCancel: 'Cancelar',
    labelButtonConfirm: 'Confirmar',
    showConfirmationMessage: false,
  },
  argTypes: {
    variant: {
      options: [ColorVariant.default,'default','success', 'danger', 'warning', 'info'],
      control: { type: 'select' }
    },
    size: {
      options: [ ConfirmationMessageSize.sm, ConfirmationMessageSize.md, ConfirmationMessageSize.lg],
      control: 'inline-radio' 
    },
    labelButtonCancel:{type:'string'},
    labelButtonConfirm:{type:'string'},
    onCancel:{type:'function'},
    onConfirm:{type:'function'}
  }
} as ComponentMeta<typeof ConfirmationMessage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ConfirmationMessage> = (args) => <ConfirmationMessage {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { 
  variant: ColorVariant.success,
  size: ConfirmationMessageSize.lg,
  onConfirm: () => alert('Confirmar'),
  onCancel: () => alert('Cancelar'),
};