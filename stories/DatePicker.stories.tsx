import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePickerType } from '../src/components/DatePicker';
import { DatePicker } from '../src';
import { ColorVariant } from '../src/types';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/DatePicker',
  component: DatePicker,

  args: {
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    type: {
      options: [DatePickerType.datetime,DatePickerType.date,DatePickerType.time],
      control: { type: 'select' }
    },
  }
} as ComponentMeta<typeof DatePicker>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

//👇 Each story then reuses that template
export const Datetime = Template.bind({});
Datetime.args = { label: 'Datetime',  type: DatePickerType.datetime};

export const Date = Template.bind({});
Date.args = { label: 'Date',  type: DatePickerType.date };

export const Time = Template.bind({});
Time.args = { label: 'Time',  type:DatePickerType.time };

export const example = ()=>{
}