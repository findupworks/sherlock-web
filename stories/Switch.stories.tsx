import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Switch } from '../src/components/Switch';
import { RadioSize } from '../src/components/Radio';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Switch',
  component: Switch,

  args: {
    //👇 Now all Button stories will be primary.
    disabled: false,
  },
  argTypes: {
    size: {
      options: [ RadioSize.sm, RadioSize.md],
      control: 'inline-radio' 
    },
    disabled : { control : 'boolean'},
    checked : { control : 'boolean'},
    onClick:{
      action:'clicked'
    }
  }
} as ComponentMeta<typeof Switch>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Default' };