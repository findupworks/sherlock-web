import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '../src';
import { ColorVariant } from '../src/types';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Badge',
  component: Badge,

  args: {
    //👇 Now all Button stories will be primary.
    rounded: false,
  },
  argTypes: {
    variant: {
      options: [ColorVariant.default,'primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
    rounded : { control : 'boolean'},
  }
} as ComponentMeta<typeof Badge>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Default',  variant: ColorVariant.default };

export const Primary = Template.bind({});
Primary.args = { label: 'Primary',  variant: ColorVariant.primary };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary',  variant: ColorVariant.secondary };

export const Success = Template.bind({});
Success.args = { label: 'Success',  variant: ColorVariant.success };

export const Danger = Template.bind({});
Danger.args = { label: 'Danger',  variant: ColorVariant.danger };

export const Warning = Template.bind({});
Warning.args = { label: 'Warning',  variant: ColorVariant.warning };

export const Info = Template.bind({});
Info.args = { label: 'Info',  variant: ColorVariant.info };