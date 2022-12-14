import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sticker } from '../src/components/Sticker';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Sticker',
  component: Sticker,

  args: {
    //π Now all Button stories will be primary.
    rounded: false,
    icon: "image",
    img: "",

  },
  argTypes: {
    rounded : { control: 'boolean'},
    size: {
      options: [ 'xs', 'sm', 'md', 'lg', 'xl'],
      control: 'inline-radio' 
    },
 
  }
} as ComponentMeta<typeof Sticker>;


//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Sticker> = (args) => <Sticker {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});