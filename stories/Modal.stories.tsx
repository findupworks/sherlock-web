import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal, Button } from '../src';
import { ColorVariant } from '../src/types';
import {ModalSize } from '../src/components/Modal';

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
    icon:'',
    size:ModalSize.md,
    labelButtonCancel:'Cancelar',
    labelButtonConfirm:'Confirmar',
    showModal:false,
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
    icon:{type:'string'},
    onHide:{type:'function'},
    onCancel:{type:'function'},
    onConfirm:{type:'function'}
  }
} as ComponentMeta<typeof Modal>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { 
  variant: ColorVariant.default,
  onConfirm: () => alert('Confirmar'),
  onHide: () => alert('Esconder'),
  onCancel: () => alert('Cancelar'),
};

export const Success = Template.bind({});
Success.args = { 
  variant: ColorVariant.success,
  onConfirm: () => alert('Confirmar'),
  onHide: () => alert('Esconder'),
  onCancel: () => alert('Cancelar'),
 };

export const Danger = Template.bind({});
Danger.args = {
  variant: ColorVariant.danger, 
  onConfirm: () => alert('Confirmar'),
  onHide: () => alert('Esconder'),
  onCancel: () => alert('Cancelar'),
};

export const Warning = Template.bind({});
Warning.args = {
  variant: ColorVariant.warning,
  onConfirm: () => alert('Confirmar'),
  onHide: () => alert('Esconder'),
  onCancel: () => alert('Cancelar'), 
};

export const Info = Template.bind({});
Info.args = { 
  variant: ColorVariant.info,
  onConfirm: () => alert('Confirmar'),
  onHide: () => alert('Esconder'),
  onCancel: () => alert('Cancelar'), 
};

export const Example = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className='bg-white p-10 mx-8 m-5 '>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nisl id ipsum vestibulum interdum. Fusce facilisis turpis sit amet mauris bibendum, id interdum est dignissim. Aenean interdum aliquet arcu, id placerat velit sollicitudin ut. Morbi lobortis ligula efficitur nisl feugiat rhoncus. Suspendisse potenti. Nullam volutpat enim at justo aliquet, sit amet condimentum nulla placerat. Morbi aliquet luctus erat, eu tincidunt libero maximus nec.

        Donec laoreet orci enim, at imperdiet nulla lobortis at. Nunc pharetra gravida pellentesque. Proin placerat massa in quam ultrices, et molestie nulla ultrices. Duis molestie neque ut odio tristique, vitae cursus eros mattis. Duis et sagittis est. Nunc quis lorem gravida, ultrices purus sed, dignissim justo. Vestibulum scelerisque tristique venenatis.

        Nulla non egestas tellus, at dignissim sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus bibendum in turpis sed viverra. Aliquam a urna nulla. Aliquam quis lectus placerat, faucibus enim at, iaculis nibh. Morbi bibendum pulvinar dolor pellentesque ultricies. Curabitur ornare finibus libero sed mattis. Nullam tristique at lacus non feugiat.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nisl id ipsum vestibulum interdum. Fusce facilisis turpis sit amet mauris bibendum, id interdum est dignissim. Aenean interdum aliquet arcu, id placerat velit sollicitudin ut. Morbi lobortis ligula efficitur nisl feugiat rhoncus. Suspendisse potenti. Nullam volutpat enim at justo aliquet, sit amet condimentum nulla placerat. Morbi aliquet luctus erat, eu tincidunt libero maximus nec.

        Donec laoreet orci enim, at imperdiet nulla lobortis at. Nunc pharetra gravida pellentesque. Proin placerat massa in quam ultrices, et molestie nulla ultrices. Duis molestie neque ut odio tristique, vitae cursus eros mattis. Duis et sagittis est. Nunc quis lorem gravida, ultrices purus sed, dignissim justo. Vestibulum scelerisque tristique venenatis.

        Nulla non egestas tellus, at dignissim sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus bibendum in turpis sed viverra. Aliquam a urna nulla. Aliquam quis lectus placerat, faucibus enim at, iaculis nibh. Morbi bibendum pulvinar dolor pellentesque ultricies. Curabitur ornare finibus libero sed mattis. Nullam tristique at lacus non feugiat.


        <div>
          <Button label='Abrir modal' variant={ColorVariant.default} onClick={() => setShowModal(true)}/>

          <Modal title={"Meu Modal"} showModal={showModal} onHide={() => setShowModal(!showModal)} onConfirm={() => alert('confirmado oficialmente')} onCancel={() => setShowModal(!showModal)} icon="user">
            Você está vendo o conteudo do modal
          </Modal>
        </div>
            

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nisl id ipsum vestibulum interdum. Fusce facilisis turpis sit amet mauris bibendum, id interdum est dignissim. Aenean interdum aliquet arcu, id placerat velit sollicitudin ut. Morbi lobortis ligula efficitur nisl feugiat rhoncus. Suspendisse potenti. Nullam volutpat enim at justo aliquet, sit amet condimentum nulla placerat. Morbi aliquet luctus erat, eu tincidunt libero maximus nec.

        Donec laoreet orci enim, at imperdiet nulla lobortis at. Nunc pharetra gravida pellentesque. Proin placerat massa in quam ultrices, et molestie nulla ultrices. Duis molestie neque ut odio tristique, vitae cursus eros mattis. Duis et sagittis est. Nunc quis lorem gravida, ultrices purus sed, dignissim justo. Vestibulum scelerisque tristique venenatis.

        Nulla non egestas tellus, at dignissim sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus bibendum in turpis sed viverra. Aliquam a urna nulla. Aliquam quis lectus placerat, faucibus enim at, iaculis nibh. Morbi bibendum pulvinar dolor pellentesque ultricies. Curabitur ornare finibus libero sed mattis. Nullam tristique at lacus non feugiat.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nisl id ipsum vestibulum interdum. Fusce facilisis turpis sit amet mauris bibendum, id interdum est dignissim. Aenean interdum aliquet arcu, id placerat velit sollicitudin ut. Morbi lobortis ligula efficitur nisl feugiat rhoncus. Suspendisse potenti. Nullam volutpat enim at justo aliquet, sit amet condimentum nulla placerat. Morbi aliquet luctus erat, eu tincidunt libero maximus nec.

        Donec laoreet orci enim, at imperdiet nulla lobortis at. Nunc pharetra gravida pellentesque. Proin placerat massa in quam ultrices, et molestie nulla ultrices. Duis molestie neque ut odio tristique, vitae cursus eros mattis. Duis et sagittis est. Nunc quis lorem gravida, ultrices purus sed, dignissim justo. Vestibulum scelerisque tristique venenatis.

        Nulla non egestas tellus, at dignissim sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus bibendum in turpis sed viverra. Aliquam a urna nulla. Aliquam quis lectus placerat, faucibus enim at, iaculis nibh. Morbi bibendum pulvinar dolor pellentesque ultricies. Curabitur ornare finibus libero sed mattis. Nullam tristique at lacus non feugiat.


      </div>
    </div>
  )
}