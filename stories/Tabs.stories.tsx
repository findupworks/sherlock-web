import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from '../src/components/Tabs';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Tabs',
  component: Tabs,

  args: {
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    onClick:{
      action:'clicked'
    }
  }
} as ComponentMeta<typeof Tabs>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  onTapMenu: () => alert('Click menu option'),
  onClickDropdownOption: () => console.log('Click menu option'),
  menuItems: [{label: 'All', countLabel: '1228'}, {label: 'Group', countLabel: '15'}, {label: 'Other', icon: 'caret-down', colorLabel: 'teal', dropdownOptions: [{ label: 'Opção 1' }, { label: 'Opção 2' }] }],
};