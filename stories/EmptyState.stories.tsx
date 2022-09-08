import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EmptyState } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Empty State',
  component: EmptyState,

  args: {
    //👇 Now all Button stories will be primary.
    
  },
  argTypes: {
    onClick:{
      description: "Metodo para function personalizada",
    },
  }
} as ComponentMeta<typeof EmptyState>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof EmptyState> = (args) => <EmptyState {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { 
  title: 'Place your title here',
  bodyMessage: 'Please, fill this text box with your content',
  buttonLabel: 'New',
  onClickButton: () => alert('Click button'),
};