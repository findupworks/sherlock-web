import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/List',
  component: List,
  args: {
    itemsList:[
      {
        isAselectableItem:true,
        title:'First level text',
        subTitle:'First level text',
        labelText:'Label text',
        keyItem:1
      },
      {
        isAselectableItem:true,
        title:'First level text',
        subTitle:'First level text',
        labelText:'Label text',
        keyItem:2
      },
      {
        title:'First level text',
        subTitle:'First level text',
        labelText:'Label text',
        keyItem:3
      },
      {
        title:'First level text',
        subTitle:'First level text',
        labelText:'Label text',
        keyItem:4
      }
    ]
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    variant: {
      options: ['default','primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
  }
} as ComponentMeta<typeof List>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

//👇 Each story then reuses that template
export const Group = Template.bind({});
Group.args = {variant:'group',onChangeItemsSelected:(value)=> console.log(value)};

//👇 Each story then reuses that template
export const Divider = Template.bind({});
Divider.args = {variant:'divider'};