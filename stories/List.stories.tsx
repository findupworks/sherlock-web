import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/List',
  component: List,
  args: {
    itemsList:[
      {
        isAselectableItem:true,
        title:'First level text',
        subTitle:'First level text',
        labelText:'Label text',
        keyItem:1
      },
      {
        isAselectableItem:true,
        title:'First level text',
        subTitle:'First level text',
        labelText:'Label text',
        onClickActionDelete:(value)=> alert('deletado....'),
        onClickActionInfo:(value)=> alert('informações'),
        onClickActionCopy:(value)=> alert('Clicado...'),
        keyItem:2,
        dropDrownAction:[
          {label:"ITEM 1",onClickActionRight:()=> alert('Clicou')},
          {label:'ITEM 2'}
        ]
      },
      {
        title:'First level text',
        subTitle:'First level text',
        labelText:'Label text',
        keyItem:3,
        onClick:()=> alert('Clicado'),
      },
      {
        title:'First level text',
        subTitle:'First level text',
        labelText:'Label text',
        keyItem:4
      }
    ]
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    variant: {
      options: ['group','divider'],
      control: { type: 'select' },
      description:"Declare o tipo de listagem que você quer a listagem agrupada(group) ou separada (divider)."
    },
    itemsList: {
     description:'Nessa propriedade,você declarará um array de objetos,veja abaixo as propriedades do objeto: \n\n title:adicione um titulo ao item da lista. \n\n subTitle:adicione um subtitulo ao item da lista.  \n\n labelText:adicione um marcador de texto.  \n\n img:adicione uma imagem  \n\n icon:Adicione um icone   \n\n dropDrownAction:Adicione um array de objetos,e crie um dropwdon para executar suas ações,(o objeto vai conter as propriedades,label:string,onClickActionRight:Function) \n\n isAselectableItem:Você quer que o item seja selecionável? declare essa proprieade booleana,\n\n onClickActionInfo:se você optou por ser um item selecionável,você poderá executar algumas ações,declare essa propriedade que recebe uma função com argumentos,ele execute uma ação para aquele item. \n\n onClickActionDelete:se você optou por ser um item selecionável,você poderá executar algumas ações,declare essa propriedade que recebe uma função com argumentos,ele execute uma ação para aquele item. \n\n onClick:se você optou por ser um item selecionável,você poderá executar algumas ações,declare essa propriedade que recebe uma função com argumentos,ele execute uma ação para aquele item. \n\n onClickActionCopy:se você optou por ser um item selecionável,você poderá executar algumas ações,declare essa propriedade que recebe uma função com argumentos,ele execute uma ação para aquele item.\n\n keyItem:adicione um valor único para indetificar aquele item'
    },
    onChangeItemsSelected:{
      control:{type:'function'},
      description:'Declare essa propriedade e passe uma função com argumento,e resgate as key dos items selecionados.'
    }
   
  }
} as ComponentMeta<typeof List>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

//👇 Each story then reuses that template
export const Group = Template.bind({});
Group.args = {variant:'group',onChangeItemsSelected:(value)=> console.log(value)};

//👇 Each story then reuses that template
export const Divider = Template.bind({});
Divider.args = {variant:'divider'};