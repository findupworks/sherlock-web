import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box, BoxBody, BoxHeader, BoxFooter } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Box',
  component: Box,

  args: {
    //👇 Now all Button stories will be primary.
  },
  argTypes: {

  }
} as ComponentMeta<typeof Box>;

export const Default = () => {
  return (
    <Box className="bg-white rounded-lg">
      <BoxHeader>
        Aqui é o Header
      </BoxHeader>
      <BoxBody>
        Aqui é o Body
      </BoxBody>
      <BoxFooter>
        Aqui é o Footer
      </BoxFooter>
    </Box>
  )
}