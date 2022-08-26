import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Section } from '../src/components/Section';
import { SectionSize } from '../src/components/Section';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Section',
  component: Section,

  args: {
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    size: {
      options: [ SectionSize.sm, SectionSize.md, SectionSize.lg],
      control: 'inline-radio' 
    },
    items: {
      description: "Conjuto de items do componente Section. Parametros: label, hasIcon, disabled"
    }
  }
} as ComponentMeta<typeof Section>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { items: [{label: 'SECTION COLLAPSABLE REGULAR'}, {label: 'SECTION COLLAPSABLE OPEN DEFAULT', icon: true}, {label: 'SECTION COLLAPSABLE OPEN HOVER', icon: true}, {label: 'SECTION COLLAPSABLE CLOSED DEFAULT', icon: true}, {label: 'SECTION COLLAPSABLE DISABLED', icon: true, disabled: true} ] };
