// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';

// import { DualList } from '../src';

// export default {
//   /* π The title prop is optional.
//   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//   * to learn how to generate automatic titles
//   */
//   title: 'Data Display/DualList',
//   component: DualList,

//   args: {
//     onChange:(value)=> alert(value),
//     titleOne:'',
//     titleTwo:'',
//    options:[
//      { value: 'one', label: 'Option One' },
//      { value: 'two', label: 'Option Two' },
//     ],
//     disabled:false
//     //π Now all Button stories will be primary.
//   },
//   argTypes: {
//     disabled:{control:'boolean'},
//     titleOne:{type:'string'},
//     titleTwo:{type:'string'}

//   }
// } as ComponentMeta<typeof DualList>;

// //π We create a βtemplateβ of how args map to rendering
// const Template: ComponentStory<typeof DualList> = (args) => <DualList {...args} />;

// //π Each story then reuses that template
// export const Default = Template.bind({});
// Default.args = { };
