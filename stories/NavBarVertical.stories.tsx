import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavBarVertical } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/NavBarVertical',
  component: NavBarVertical,

  args: {
    navBarItems:[
      {
        label:"Item Name",
        router:'#'
      },
      {
        label:"Item Name",
        router:'#',
        subItems:[
          {
            label:"Item Name",
            router:'#',
          },
          {
            label:"Item Name",
            router:'#',
          },
          {
            label:"Item Name",
            router:'#',
          }
        ]
      },
      {
        label:"Item Name",
        router:'#',
        subItems:[
          {
            label:"Item Name",
            router:'#',
          },
          {
            label:"Item Name",
            router:'#',
          },
          {
            label:"Item Name",
            router:'#',
          }
        ]
      },
      {
        label:"Item Name",
        router:'#',
        subItems:[
          {
            label:"Item Name",
            router:'#',
          },
          {
            label:"Item Name",
            router:'#',
          },
          {
            label:"Item Name",
            router:'#',
          }
        ]
      },
      {
        label:"Item Name",
        router:'#'
      },
    ]
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
  
  }
} as ComponentMeta<typeof NavBarVertical>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NavBarVertical> = (args) => <NavBarVertical {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {  };
