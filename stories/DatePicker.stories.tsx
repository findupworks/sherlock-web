// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { DatePicker } from '../src';

// export default {
//   /* π The title prop is optional.
//   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//   * to learn how to generate automatic titles
//   */
//   title: 'Data Display/DatePicker',
//   component: DatePicker,

//   args: {
//     //π Now all Button stories will be primary.
//   },
//   argTypes: {
//     type: {
//       options: ['datetime','date','time'],
//       control: { type: 'select' }
//     },
//   }
// } as ComponentMeta<typeof DatePicker>;

// //π We create a βtemplateβ of how args map to rendering
// const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

// //π Each story then reuses that template
// export const Datetime = Template.bind({});
// Datetime.args = { label: 'Datetime',  type: 'datetime'};

// export const Date = Template.bind({});
// Date.args = { label: 'Date',  type: 'date' };

// export const Time = Template.bind({});
// Time.args = { label: 'Time',  type: 'time' };

// export const example = ()=>{
// }
