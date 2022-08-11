import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MultiStep } from '../src';
import { TypeOptions } from '../src/components/MultiStep';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/MultiStep',
  component: MultiStep,
  args: {
    //👇 Now all Button stories will be primary.
   stepCurrent:2, 
   steps:[
    {
      label:"Label 1",
    },
    {
      label:"Label 2",
    },
    {
      label:"Label 3",
    },
    {
      label:"Label 4",
    }
   ]
  },
  argTypes: {
    type: {
      options: [TypeOptions.type1,TypeOptions.type2],
      control: 'select' ,

    },
   
  }
} as ComponentMeta<typeof MultiStep>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MultiStep> = (args) => <MultiStep {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
