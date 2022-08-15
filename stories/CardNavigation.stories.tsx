import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardNavigation, } from '../src/components/CardNavigation';

import { 
    CardNavigationVariant,
    CardNavigationSize 
} from '../src/components/CardNavigation';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/CardNavigation',
  component: CardNavigation,
  args: {
    //👇 Now all Button stories will be primary.
    
  },
  argTypes: {
    variant: {
      options: [CardNavigationVariant.default, CardNavigationVariant.small],
      control: { type: 'select' }
    },
    size: {
      options: [ CardNavigationSize.sm, CardNavigationSize.md, CardNavigationSize.lg],
      control: 'inline-radio' 
    },
    iconCard: {
      options: [ 'image', 'bolt', 'sd-card'],
      control: 'select' ,
      description: "Icones do FontAwsome, passar somente o nome."
    },
  }
} as ComponentMeta<typeof CardNavigation>;

//👇 We create a “template” of how args map to rendering
const TemplateMain: ComponentStory<typeof CardNavigation> = (args) => <CardNavigation {...args} />;

//👇 Each story then reuses that template
export const Default = TemplateMain.bind({});
Default.args = {
  variant: CardNavigationVariant.default,
  size: CardNavigationSize.sm
};

export const Small = TemplateMain.bind({});
Small.args = {
  variant: CardNavigationVariant.small,
  size: CardNavigationSize.sm
};