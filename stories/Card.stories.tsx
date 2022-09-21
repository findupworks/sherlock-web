import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../src/components/Card';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Card',
  component: Card,

  args: {
    //👇 Now all Button stories will be primary.
    checked: false,
    iconCard:'',
    iconButton:'',
    imageCard:'',
    title:'',
    body:''

  },
  argTypes: {
    variant: {
      options: ['default', 'iconCard', 'userCard', 'horizontalCard'],
      control: { type: 'select' }
    },
    size: {
      options: [ 'sm', 'md', 'lg'],
      control: 'inline-radio' 
    },
    iconCard: {
       type:'string',
      description: "Icones do FontAwsome, passar somente o nome."
    },
    iconButton: {
      type:'string',
      description: "Icones do FontAwsome, passar somente o nome."
    },
    checked : { control : 'boolean'},
    imageCard:{type:'string'},
    title:{type:'string'},
    body:{type:'string'}
  }
} as ComponentMeta<typeof Card>;

//👇 We create a “template” of how args map to rendering
const TemplateMain: ComponentStory<typeof Card> = (args) => <Card {...args} />;

//👇 Each story then reuses that template
export const Default = TemplateMain.bind({});
Default.args = {
  variant: 'default',
  size: 'sm',
  onTapCheck: (check) => alert(check),
  onTapCard: () => alert('Tap card'),
  onTapIcon: () => alert('Tap icon'),
  itemsMenu: [{label: 'Opção sem icon'}, {label: 'Opção com icon', icon: 'cog'}],
  tags: [{text: 'Tag 1'}, {text: 'Tag 2'}, {text: 'Tag 3'}]
};

export const IconCard = TemplateMain.bind({});
IconCard.args = {
  variant: 'iconCard',
  size: 'sm',
  onTapCheck: (check) => alert(check),
  onTapCard: () => alert('Tap card'),
  onTapIcon: () => alert('Tap icon'),
  itemsMenu: [{label: 'Opção sem icon'}, {label: 'Opção com icon', icon: 'cog'}],
  tags: [{text: 'Tag 1'}, {text: 'Tag 2'}, {text: 'Tag 3'}]
};

export const UserCard = TemplateMain.bind({});
UserCard.args = {
  variant: 'userCard',
  size: 'sm',
  onTapCheck: (check) => alert(check),
  onTapCard: () => alert('Tap card'),
  onTapIcon: () => alert('Tap icon'),
  itemsMenu: [{label: 'Opção sem icon'}, {label: 'Opção com icon', icon: 'cog'}],
  tags: [{text: 'Tag 1'}, {text: 'Tag 2'}, {text: 'Tag 3'}]
};

export const HorizontalCard = TemplateMain.bind({});
HorizontalCard.args = {
  variant: 'horizontalCard',
  size: 'sm',
  onTapCheck: (check) => alert(check),
  onTapCard: () => alert('Tap card'),
  onTapIcon: () => alert('Tap icon'),
  itemsMenu: [{label: 'Opção sem icon'}, {label: 'Opção com icon', icon: 'cog'}],
  tags: [{text: 'Tag 1'}]
};