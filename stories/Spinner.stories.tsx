import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from '../src';
import { ColorVariant } from '../src/types';

export default {
  title: 'Feedback/Spinner',
  component: Spinner,

  argTypes: {
    variant: {
      options: [ColorVariant.default,'primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: [ 'sm', 'md'],
      control: 'inline-radio' ,
    },
  }
} as ComponentMeta<typeof Spinner>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
