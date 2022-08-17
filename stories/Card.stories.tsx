import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../src/components/Card';
import { CardSize, CardVariant } from '../src/components/Card';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Card',
  component: Card,

  args: {
    //👇 Now all Button stories will be primary.
    checked: false
  },
  argTypes: {
    variant: {
      options: [CardVariant.default, CardVariant.iconCard, CardVariant.userCard, CardVariant.horizontalCard],
      control: { type: 'select' }
    },
    size: {
      options: [ CardSize.sm, CardSize.md, CardSize.lg],
      control: 'inline-radio' 
    },
    iconCard: {
      options: [ 'camera', 'bolt', 'sd-card'],
      control: 'select' ,
      description: "Icones do FontAwsome, passar somente o nome."
    },
    iconButton: {
      options: [ 'user', 'heart', 'check'],
      control: 'select' ,
      description: "Icones do FontAwsome, passar somente o nome dele."
    },
    checked : { control : 'boolean'},
  }
} as ComponentMeta<typeof Card>;

//👇 We create a “template” of how args map to rendering
const TemplateMain: ComponentStory<typeof Card> = (args) => <Card {...args} />;

//👇 Each story then reuses that template
export const Default = TemplateMain.bind({});
Default.args = {
  variant: CardVariant.default,
  size: CardSize.sm,
  onTapCheck: (check) => alert(check),
  onTapCard: () => alert('Tap card'),
  onTapIcon: () => alert('Tap icon'),
  items: [{label: 'Opção sem icon'}, {label: 'Opção com icon', icon: 'cog'}],
  tags: [{text: 'Tag 1'}, {text: 'Tag 2'}, {text: 'Tag 3'}]
};

export const IconCard = TemplateMain.bind({});
IconCard.args = {
  variant: CardVariant.iconCard,
  size: CardSize.sm,
  onTapCheck: (check) => alert(check),
  onTapCard: () => alert('Tap card'),
  onTapIcon: () => alert('Tap icon'),
  items: [{label: 'Opção sem icon'}, {label: 'Opção com icon', icon: 'cog'}],
  tags: [{text: 'Tag 1'}, {text: 'Tag 2'}, {text: 'Tag 3'}]
};

export const UserCard = TemplateMain.bind({});
UserCard.args = {
  variant: CardVariant.userCard,
  size: CardSize.sm,
  onTapCheck: (check) => alert(check),
  onTapCard: () => alert('Tap card'),
  onTapIcon: () => alert('Tap icon'),
  items: [{label: 'Opção sem icon'}, {label: 'Opção com icon', icon: 'cog'}],
  tags: [{text: 'Tag 1'}, {text: 'Tag 2'}, {text: 'Tag 3'}]
};

export const HorizontalCard = TemplateMain.bind({});
HorizontalCard.args = {
  variant: CardVariant.horizontalCard,
  size: CardSize.sm,
  onTapCheck: (check) => alert(check),
  onTapCard: () => alert('Tap card'),
  onTapIcon: () => alert('Tap icon'),
  items: [{label: 'Opção sem icon'}, {label: 'Opção com icon', icon: 'cog'}],
  tags: [{text: 'Tag 1'}]
};