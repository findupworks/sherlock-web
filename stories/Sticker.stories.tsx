import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ColorVariant } from '../src/types';
import { Sticker, StickerSize } from '../src/components/Sticker';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Sticker',
  component: Sticker,

  args: {
    //👇 Now all Button stories will be primary.
    rounded: false,
    icon: "image",
    img: "",

  },
  argTypes: {
    rounded : { control: 'boolean'},
    size: {
      options: [ StickerSize.xs, StickerSize.sm, StickerSize.md, StickerSize.lg, StickerSize.xl],
      control: 'inline-radio' 
    },
 
  }
} as ComponentMeta<typeof Sticker>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Sticker> = (args) => <Sticker {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});