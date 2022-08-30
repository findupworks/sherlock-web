import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../src';
import { ButtonSize } from '../src/components/Button';
import { ColorVariant } from '../src/types';

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
    loading: false,
    textButton:false,
    leftIcon:'',
    rightIcon:''
  },
  argTypes: {
    variant: {
      options: [ ColorVariant.default,'primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
    outlined : { control : 'boolean'},
    size: {
      options: [ ButtonSize.sm, ButtonSize.md],
      control: 'inline-radio' 
    },
    textButton : { control : 'boolean'},
    loading : { control : 'boolean'},
    disabled : { control : 'boolean'},
    full : { control : 'boolean'},
    leftIcon: {
      type:'string',
      description: "Icones do FontAwsome, passar somente o nome dele."
    },
    rightIcon: {
      type:'string',
      description: "Icones do FontAwsome, passar somente o nome dele."
    },
  }
} as ComponentMeta<typeof Button>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Button Default', variant:  ColorVariant.default };

export const Primary = Template.bind({});
Primary.args = { label: 'Button Primary', variant:  ColorVariant.primary };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Button Secondary', variant:  ColorVariant.secondary };

export const Success = Template.bind({});
Success.args = { label: 'Button Success', variant:  ColorVariant.success };

export const Danger = Template.bind({});
Danger.args = { label: 'Button Danger', variant:  ColorVariant.danger };

export const Warning = Template.bind({});
Warning.args = { label: 'Button Warning', variant:  ColorVariant.warning };

export const Info = Template.bind({});
Info.args = { label: 'Button Info', variant:  ColorVariant.info };