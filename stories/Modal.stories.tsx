import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from '../src';
import { ColorVariant } from '../src/types';
import {ModalSize,VariantColorsModal } from '../src/components/Modal';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Modal',
  component: Modal,

  args: {
    //👇 Now all Button stories will be primary.   
    title:"Title",
    size:ModalSize.md,
    labelButtonCancel:'Cancelar',
    labelButtonConfirm:'Confirmar',
    showModal:false
  },
  argTypes: {
    variant: {
      options: [ColorVariant.default,'default','success', 'danger', 'warning', 'info'],
      control: { type: 'select' }
    },
    size: {
      options: [ ModalSize.sm, ModalSize.md, ModalSize.lg],
      control: 'inline-radio' 
    },
    children:{},
    title:{type:"string"},
    labelButtonCancel:{type:'string'},
    labelButtonConfirm:{type:'string'},
    showModal:{type:'boolean'}
  }
} as ComponentMeta<typeof Modal>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Default',  variant: VariantColorsModal.default };

export const Success = Template.bind({});
Success.args = { label: 'Success',  variant: VariantColorsModal.success };

export const Danger = Template.bind({});
Danger.args = { label: 'Danger',  variant: VariantColorsModal.danger };

export const Warning = Template.bind({});
Warning.args = { label: 'Warning',  variant: VariantColorsModal.warning };

export const Info = Template.bind({});
Info.args = { label: 'Info',  variant: VariantColorsModal.info };