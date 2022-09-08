import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Table } from '../src';
import { ColorVariant } from '../src/types';
import{ TdVariant } from '../src/components/Table'


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Table',
  component: Table,

  args: {
    //👇 Now all Button stories will be primary.
   thead:[
    {th:"Name"},
    {th:"Document Type",orderBy:true,onClickOrderBy:()=> alert('ordernando')},
    {th:"Size"},
    {th:"Status"},
    {th:"Modified Date"},
    {th:"Create Date"},
   ],
   tbody:[
    {
     trKey:0,
     tr:[
      {
        td:{text:"Text Cell",variant:'icon',icon:'user'}
      },
      {
       td:{text:"Text Cell",variant:'checkbox'},
      },
      {
        td:{text:"553 KB",variant:'progressbar',progressbar:80},
      },
      {
        td:{text:"LABEL TEXT ",variant:'text'},
      },
      {
        td:{text:"20 Seconds Ago",variant:'textSticker'},
      },
      {
        td:{text:"26 Seconds Ago",variant:'label'},
      },  
      ]
    },
    {
      trKey:1,
      tr:[
       {
         td:{text:"Text Cell",variant:'button',onClick:()=> alert("CLICADO")},
       },
       {
         td:{text:"Text Cell",variant:'sticker'},
       },
       {
         td:{text:"553 KB",variant:'toggle'},
       },
       {
         td:{text:"LABEL TEXT ",variant:'input'},
       },
       {
         td:{text:"20 Seconds Ago",variant:'badge'},
       },
       {
         td:{text:"26 Seconds Ago",variant:'icon',icon:'user'},
       }
       ]
     },    
   ]
  },
  argTypes: {
    variant: {
      options: [ColorVariant.default,'primary', 'secondary', 'danger', 'warning', 'info', 'success'],
      control: { type: 'select' }
    },
  }
} as ComponentMeta<typeof Table>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Success = Template.bind({});
Success.args = {  };

export const Danger = Template.bind({});
Danger.args = { };

export const Warning = Template.bind({});
Warning.args = { };

export const Info = Template.bind({});
Info.args = { };