import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Divider } from '../src';

export default {
  title: 'Data Display/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Default = () => {
  return (
    <div style={{width: '300px'}}><Divider/></div>
  )
}