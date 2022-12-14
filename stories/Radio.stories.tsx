import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Radio } from '../src/components/Radio';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Radio',
  component: Radio,

  args: {
    //π Now all Button stories will be primary.
    disabled: false,
    checked:false,
    label: "",
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
} as ComponentMeta<typeof Radio>;


//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Default' };