import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VerticalBar } from '../src';
import { ColorVariant } from '../src/types';

// .storybook/preview.js

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Vertical Bar',
  component: VerticalBar,

  args: {
    //👇 Now all Button stories will be primary.
    iconsColor: 'black',
    barColor: 'white',
  },
  argTypes: {
    iconsColor:{
      control: {
        type: 'color'
      },
      description: "Setar cores do tailwind para os icones. ex: teal",
      default: "black"
    },
    barColor: {
      control: {
        type: 'color'
      },
      description: "Setar cor do fundo da barra vertical. ex: teal",
    },
    icons:{
      description: "Icones(do FontsAwesome) que seram exibidos no componente. Para fazer uso da barra de divisão, basta passar no objeto a opção divider: true",
    },
    onClick:{
      description: "Metodo para function personalizada",
    },
  }
} as ComponentMeta<typeof VerticalBar>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof VerticalBar> = (args) => <VerticalBar {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { icons: [{iconType: 'home',onClick:()=> alert('clicado')}, {iconType: 'bolt',onClick:()=> alert('clicado')}, {iconType: 'droplet',onClick:()=> alert('clicado')}, {iconType: 'paint-roller',onClick:()=> alert('clicado')}, {iconType: 'fill-drip',onClick:()=> alert('clicado')}, {iconType: 'sliders', divider: true}, {iconType: 'power-off'}], 
  onClickLogout: () => alert('Logout...'),
  onClickEdit:()=> alert('Clicado'),
  hasLogo: true
};