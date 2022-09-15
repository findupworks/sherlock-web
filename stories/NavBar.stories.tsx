import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavBar } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/NavBar',
  component: NavBar,

  args: {

    navBarItems:[
      {
        label:"Navbar Text",
        router:'#'
      },
      {
        label:"Navbar Text",
        router:'#',
        subItems:[
          {
            label:"Navbar Text",
            router:'#',
          },
          {
            label:"Navbar Text",
            router:'#',
          },
          {
            label:"Navbar Text",
            router:'#',
          },
          {
            label:"Navbar Text",
            router:'#',
          },
        ]
      },
      {
        label:"Navbar Text",
        router:'#'
      },
      {
        label:"Navbar Text",
        router:'#'
      },
      {
        label:"Navbar Text",
        router:'#'

      },
    ]
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    variant:{
      control:'select',
      options:['light','dark']
    }
  }
} as ComponentMeta<typeof NavBar>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = ()=>{
  return (
    <div style={{background:'#262627'}}>
    <NavBar
      variant='light'
      navBarItems={[
        {
          label:"Navbar Text",
          router:'#'
        },
        {
          label:"Navbar Text",
          router:'#',
          subItems:[
            {
              label:"Navbar Text",
              router:'#',
            },
            {
              label:"Navbar Text",
              router:'#',
            },
            {
              label:"Navbar Text",
              router:'#',
            },
            {
              label:"Navbar Text",
              router:'#',
            },
          ]
        },
        {
          label:"Navbar Text",
          router:'#'
        },
        {
          label:"Navbar Text",
          router:'#'
        },
        {
          label:"Navbar Text",
          router:'#'
  
        },
      ]
    }
    />
  </div>
  )
}
//👇 Each story then reuses that template
export const Dark = Template.bind({});
Dark.args = { variant:'dark'  };
