import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '../src';
import { ColorVariant } from '../src/types';
import { DropwdonVariant,inputType } from '../src/components/Dropdown';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  * to learn how to generate automatic titles
  */
  title: 'Overlay/Dropdown',
  component: Dropdown,

  args: {
    //👇 Now all Button stories will be primary.
    leftIcon:'',
    rightIcon:'',
    labelButtonDropdown:'Apply',
    label:"Default",
    isSearch:true,

  },
  argTypes: {
    variant:{
      options: [DropwdonVariant.default,DropwdonVariant.icon,DropwdonVariant.radio,DropwdonVariant.checkbox,DropwdonVariant.filter],
      control: 'select',
      description:'São as variações de tipos,podendo ser personalizadas.'
    },
    labelButtonDropdown:{
      type:"string",
      description: "Propriedade para alterar a label do botão,dentro do Dropdown."
    },
    leftIcon: {
      type:"string",
      description: "Icones do FontAwsome, passar somente o nome dele."
    },
    rightIcon: {
      type:"string",
      description: "Icones do FontAwsome, passar somente o nome dele."
    },
    isSearch:{
      control:'boolean',
      description: "Adicione um input de pesquisas dentro do dropwdon"
    },
    label:{
      type:'string',
      description: "Adicione uma label ao botão que abre o dropwdon"
    },
    onClickButtonDropwdon:{
      type:'function',
      description: "Adicione alguma ação ao botão,dentro do dropwdon"
    },
    items:{
      description:' label:Adicione uma label;  isDivider?:adicione uma linha de divisão entre os itens; icon?:adicione um ícone(Icones do FontAwsome, passar somente o nome dele) obs:Essa opção é apenas dísponível para variant (icon) ; value?:adicione um valor(se for do tipo checkbox,ou radio) e somente é possível utilizar nas variants checkbox,radio,filter; subItens?:se a variant for(checkbox ou se o tipo do item menu for checkbox,é possível adicionar a este um subitens) isTitleFilterBy?:se for a variant (filter) adicione um titulo "Filter by" acima do item que quiser typeInput?:se a variant for (filter) adicione o tipo do elemento(radio,checkbox)(opcional)  checked?:sete algum valor selecionado diretamente nos campos do tipo radio,checkbox'
    },
    onChange:{
      type:'function',
      description: "Verifique por meio dessas propriedades e acompanhe todas as alterações como (valor),(item alterado) e o index do item alterado,bem como verifique se aquele elemento é um subitem ou não"
    },
  }
} as ComponentMeta<typeof Dropdown>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { 
   label: 'Default',
   variant:DropwdonVariant.default,
   isSearch:true,
   onClickButtonDropwdon:()=> alert('Clicou.'),
   itemsMenu: [
    {
    label: 'Opção 1',
    icon:'user',
    isDivider:true,
    onClickActionRight:()=> alert('Clicou'),
    value:"option1",
    typeInput:inputType.checkbox,
    subItens:[
       {label:"Opção 1",value:'1'},
       {label:"Opção 2",value:'2'},
      ]
     }, 
    {
     label: 'Opção 2', 
     isDivider:true,
     onClickActionRight:()=> alert('Clicou'),
     value:'option2',
     typeInput:inputType.radio,
    }
  ]  
};


export const Icon = Template.bind({});
Icon.args = { 
   label: 'Default',
   variant:DropwdonVariant.icon,
   isSearch:true,
   onClickButtonDropwdon:()=> alert('Clicou'),
   itemsMenu: [
    {
    label: 'Opção 1',
    icon:'user',
    isDivider:true,
    value:"option1",
    typeInput:inputType.checkbox,
    subItens:[
       {label:"Opção 1",value:'1'},
       {label:"Opção 2",value:'2'},
      ]
     }, 
    {
     label: 'Opção 2', 
     isDivider:true,
     onClickActionRight:()=> alert('Clicou'),
     value:'option2',
     typeInput:inputType.radio,
    }
  ]  
};

export const Radio = Template.bind({});
Radio.args = { 
   label: 'Default',
   variant:DropwdonVariant.radio,
   onChange:(event,item,index)=> console.log(event,item,index), 
   isSearch:true,
   onClickButtonDropwdon:()=> alert('Clicou'),
   itemsMenu: [
    {
    label: 'Opção 1',
    icon:'user',
    isDivider:true,
    value:"option1",
    typeInput:inputType.checkbox,
    subItens:[
       {label:"Opção 1",value:'1'},
       {label:"Opção 2",value:'2'},
      ]
     }, 
    {
     label: 'Opção 2', 
     isDivider:true,
     onClickActionRight:()=> alert('Clicou'),
     value:'option2',
     typeInput:inputType.radio,
    }
  ]  
};

export const Checkbox = Template.bind({});
Checkbox.args = { 
   label: 'Default',
   variant:DropwdonVariant.checkbox,
   onChange:(event,item,index,isSubItem)=> console.log(event,item,index,isSubItem), 
   isSearch:true,
   onClickButtonDropwdon:()=> alert('Clicou'),
   itemsMenu: [
    {
    label: 'Opção 1',
    icon:'user',
    isDivider:true,
    onClickActionRight:()=> alert('Clicou'),
    value:"option1",
    typeInput:inputType.checkbox,
    subItens:[
       {label:"Opção 1",value:'1',checked:true},
       {label:"Opção 2",value:'2'},
      ]
     }, 
    {
     label: 'Opção 2', 
     isDivider:true,
     value:'option2',
    },
    {
      label: 'Opção 3', 
      isDivider:true,
      value:'option3',
      onClickActionRight:()=> alert("clicou")
     },
     {
      label: 'Opção 4', 
      isDivider:true,
      value:'option4',
     },
     {
      label: 'Opção 5', 
      isDivider:true,
      value:'option5',
      checked:true
     }
  ]  
};

export const Filter = Template.bind({});
Filter.args = { 
   label: 'Default',
   variant:DropwdonVariant.filter,
   onChange:(event,item,index)=> console.log(event,item,index), 
   isSearch:true,
   onClickButtonDropwdon:()=> alert('clicou'),
   itemsMenu: [
    {
    isTitleFilterBy:true,
    label: 'Opção sem icon',
    isDivider:true,
    icon:'user',
    onClickActionRight:()=> alert('Clicou'),
    value:"option1",
    typeInput:inputType.checkbox,
    subItens:[
       {label:"PRIMEIRO SUBITEM DE TESTE",value:'1'},
       {label:"PRIMEIRO SUBITEM DE TESTE",value:'1'},
       {label:"PRIMEIRO SUBITEM DE TESTE",value:'1'},
       {label:"PRIMEIRO SUBITEM DE TESTE",value:'1'},
      ]
     }, 
    {
     label: 'Opção com icon', 
     icon: 'cog',
     isDivider:true,
     isTitleFilterBy:true,
     value:'option2',
     typeInput:inputType.radio,
     subItens:[{label:"PRIMEIRO SUBITEM DE TESTE",value:'2'}]
    }
  ]  
};

