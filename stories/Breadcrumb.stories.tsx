import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Breadcrumb } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/breadcrumb',
  component: Breadcrumb,

  args: {
    stepsBreadcrumb:[
      {
        label:"Etapa 1",
        router:'#'
      },
      {
        label:"Etapa 2",
        router:'#'
      },
      {
        label:"Etapa 3",
        router:'#'
      },
      {
        label:"Etapa 4",
        router:'#'
      },
      {
        label:"Etapa 5",
        router:'#'
      },
    ]
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    stepsBreadcrumb:{
      description:'Adicione um array de objetos,aonde o objeto irá conter a label,e router(adicione a rota do link que você deseja)'
    }
  }
} as ComponentMeta<typeof Breadcrumb>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {  };

