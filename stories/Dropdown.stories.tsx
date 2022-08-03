import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Dropdown } from '../src';
import { ColorVariant } from '../src/types';



export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Overlay/Dropdown',
  component: Dropdown,

  args: {
    //👇 Now all Button stories will be primary.
    outlined: false,
  },
  argTypes: {
    outlined : { control : 'boolean'},
  }
} as ComponentMeta<typeof Dropdown>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Default' };