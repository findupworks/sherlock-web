import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Badge',
  component: Badge,

  args: {
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    variant: {
      options: ['default','primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
  }
} as ComponentMeta<typeof Badge>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Default',  variant: "default" };

export const Primary = Template.bind({});
Primary.args = { label: 'Primary',  variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary',  variant: "secondary" };

export const Success = Template.bind({});
Success.args = { label: 'Success',  variant: "success" };

export const Danger = Template.bind({});
Danger.args = { label: 'Danger',  variant: "danger" };

export const Warning = Template.bind({});
Warning.args = { label: 'Warning',  variant: "warning" };

export const Info = Template.bind({});
Info.args = { label: 'Info',  variant: "info" };