import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from '../src/components/Checkbox';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Checkbox',
  component: Checkbox,

  args: {
    //π Now all Button stories will be primary.
    disabled: false,
    checked:false,
    label: "",
    icon: "check"
  },
  argTypes: {
    size: {
      options: [ 'sm', 'md', 'lg'],
      control: 'inline-radio' 
    },
    disabled : { control : 'boolean'},
    checked : { control : 'boolean'},
    onClick:{
      action:'clicked'
    }
  }
} as ComponentMeta<typeof Checkbox>;


//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: '' };