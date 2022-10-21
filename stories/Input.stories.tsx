import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "../src/components/Input";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Form/Input",
  component: Input,

  args: {
    //👇 Now all Button stories will be primary.
    label: "",
    placeholder: "",
    isVisible: false,
    selectorItems: [
      { label: "Opção 01", value: "1" },
      { label: "Opção 02", value: "2" },
    ],
  },
  argTypes: {
    label: {
      type: "string",
      description: "Label do input",
    },
    labelDefault: {
      type: "string",
      description: "Label para valor default no type Selector",
    },
    icon: {
      type: "string",
      description: "Icone do fonts awesome para o tipo Icon (utilizar apenas o nome do icone diretamente)",
    },
    isVisible: {
      control: "boolean",
      description:
        "Controla a exibiçação do icone de olho aberto/fechado para esconder o que está escrito no input, no tipo default.",
    },
    tag: {
      type: "boolean",
      description:
        "A TAG se refere a mensagem de sucesso, aviso e erro que é possivel exibir abaixo do input usando esta flag.",
    },
    inputType: {
      options: ["default", "icon", "selector", "textarea", "password"],
      control: "select",
      description: "Tipos do input disponíveis",
    },
  },
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  label: "Campo",
  tag: true,
  isVisible: true,
  icon: "magnifying-glass",
  placeholder: "Mensagem teste 1 2 3",
};
