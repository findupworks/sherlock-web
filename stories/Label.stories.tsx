import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Label } from '../src';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Label',
  component: Label,

  args: {
    size: 'md',
    outlined:false,
    iconRight:''
    //π Now all Button stories will be primary.
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
    outlined : { control : 'boolean'},
    iconRight : { type : 'string'},
    size:{
      options:['sm', 'md'],
      control: 'inline-radio' 
    }
  }
} as ComponentMeta<typeof Label>;


//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Default',  variant: 'default' };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary',  variant: 'secondary' };

export const Success = Template.bind({});
Success.args = { label: 'Success',  variant: 'success' };

export const Danger = Template.bind({});
Danger.args = { label: 'Danger',  variant: 'danger' };

export const Warning = Template.bind({});
Warning.args = { label: 'Warning',  variant: 'warning' };

export const Info = Template.bind({});
Info.args = { label: 'Info',  variant: 'info' };