import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardNavigation, } from '../src/components/CardNavigation';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/CardNavigation',
  component: CardNavigation,
  args: {
    //π Now all Button stories will be primary.
    
  },
  argTypes: {
    variant: {
      options: ['default', 'small'],
      control: { type: 'select' }
    },
    size: {
      options: [ 'sm', 'md', 'lg'],
      control: 'inline-radio' 
    },
    iconCard: {
      options: [ 'image', 'bolt', 'sd-card'],
      control: 'select' ,
      description: "Icones do FontAwsome, passar somente o nome."
    },
  }
} as ComponentMeta<typeof CardNavigation>;

//π We create a βtemplateβ of how args map to rendering
const TemplateMain: ComponentStory<typeof CardNavigation> = (args) => <CardNavigation {...args} />;

//π Each story then reuses that template
export const Default = TemplateMain.bind({});
Default.args = {
  variant: 'default',
  size: 'sm'
};

export const Small = TemplateMain.bind({});
Small.args = {
  variant: 'sm',
  size: 'sm'
};