import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert } from '../src';
import { AlertVariant } from '../src/components/Alert';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Alert',
  component: Alert,

  args: {
    //👇 Now all Button stories will be primary.
    outlined: false,
  },
  argTypes: {
    variant: {
      options: [AlertVariant.default,'primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
    outlined : { control : 'boolean'},
    icon: {
      options: [ 'user', 'heart', 'check'],
      control: 'select' ,
      description: "Icones do FontAwsome, passar somente o nome dele."
    },
  }
} as ComponentMeta<typeof Alert>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { title: 'Alert Default!', text: 'Decrição Default',  variant: AlertVariant.default };

export const Primary = Template.bind({});
Primary.args = { title: 'Alert Primary!', text: 'Decrição Primary',  variant: AlertVariant.primary };

export const Secondary = Template.bind({});
Secondary.args = { title: 'Alert Secondary!', text: 'Decrição Secondary',  variant: AlertVariant.secondary };

export const Success = Template.bind({});
Success.args = { title: 'Alert Success!', text: 'Decrição Success',  variant: AlertVariant.success };

export const Danger = Template.bind({});
Danger.args = { title: 'Alert Danger!', text: 'Decrição Danger',  variant: AlertVariant.danger };

export const Warning = Template.bind({});
Warning.args = { title: 'Alert Warning!', text: 'Decrição Warning',  variant: AlertVariant.warning };

export const Info = Template.bind({});
Info.args = { title: 'Alert Info!', text: 'Decrição Info',  variant: AlertVariant.info };