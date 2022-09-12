import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardClean } from '../src/components/CardClean';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/CardClean',
  component: CardClean,

  args: {
    //👇 Now all Button stories will be primary.
    checked: false
  },
  argTypes: {

  }
} as ComponentMeta<typeof CardClean>;

//👇 We create a “template” of how args map to rendering
const TemplateMain: ComponentStory<typeof CardClean> = (args) => <CardClean {...args} />;

//👇 Each story then reuses that template
export const Default = TemplateMain.bind({});
Default.args = {
  os: '#121922',
  city: 'Recife - PE',
  corporateName: 'SANTANDER NORDESTE',
};