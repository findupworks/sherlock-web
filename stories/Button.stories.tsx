import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../src';
import { ButtonSize, ButtonVariant } from '../src/components/Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Button',
  component: Button,

  args: {
    //👇 Now all Button stories will be primary.
    outlined: false,
    disabled: false,
    full: false,
    loading: false
  },
  argTypes: {
    variant: {
      options: [ButtonVariant.default,'primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: [ ButtonSize.sm, ButtonSize.md, ButtonSize.lg],
      control: 'inline-radio' 
    },
    outlined : { control : 'boolean'},
    loading : { control : 'boolean'},
    disabled : { control : 'boolean'},
    full : { control : 'boolean'},
    leftIcon: {
      options: [ 'user', 'heart', 'check'],
      control: 'select' ,
      description: "Icones do FontAwsome, passar somente o nome dele."
    },
    rightIcon: {
      options: [ 'user', 'heart', 'check'],
      control: 'select' ,
      description: "Icones do FontAwsome, passar somente o nome dele."
    },
  }
} as ComponentMeta<typeof Button>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Button Default', variant: ButtonVariant.default };

export const Primary = Template.bind({});
Primary.args = { label: 'Button Primary', variant: ButtonVariant.primary };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Button Secondary', variant: ButtonVariant.secondary };

export const Success = Template.bind({});
Success.args = { label: 'Button Success', variant: ButtonVariant.success };

export const Danger = Template.bind({});
Danger.args = { label: 'Button Danger', variant: ButtonVariant.danger };

export const Warning = Template.bind({});
Warning.args = { label: 'Button Warning', variant: ButtonVariant.warning };

export const Info = Template.bind({});
Info.args = { label: 'Button Info', variant: ButtonVariant.info };