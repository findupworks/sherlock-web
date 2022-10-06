import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Table, TableHead, TableBody, Th, Tr, Td } from "../src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Data Display/Table",
  component: Table,
  args: {
    //👇 Now all Button stories will be primary.
  },
  argTypes: {},
} as ComponentMeta<typeof Table>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Table> = (args) => {
  return (
    <Table>
      <TableHead>
        <Th>Os</Th>
        <Th>Agendamento</Th>
        <Th>Cliente</Th>
        <Th>Especialista</Th>
        <Th>Endereço</Th>
        <Th>Cidade</Th>
        <Th>Estado</Th>
        <Th>Tipo</Th>
        <Th>Status</Th>
        <Th>Responsável</Th>
        <Th>Ações</Th>
      </TableHead>
      <TableBody>
        <Tr>
          <Td>#65756</Td>
          <Td>Recife: 31/03/3030 | 08:00</Td>
          <Td>Loccitane</Td>
          <Td>Renan Felisberto</Td>
          <Td>Avenida Vilas Boas 1749, Sobreloja 4 - centro</Td>
          <Td>Goiânia</Td>
          <Td>Goiás</Td>
          <Td>FIELD</Td>
          <Td>Buscando técnico</Td>
          <Td>Renan Felisberto</Td>
          <Td>Lupa</Td>
        </Tr>
        <Tr>
          <Td>#65756</Td>
          <Td>Recife: 31/03/3030 | 08:00</Td>
          <Td>Loccitane</Td>
          <Td>Renan Felisberto</Td>
          <Td>Avenida Vilas Boas 1749, Sobreloja 4 - centro</Td>
          <Td>Goiânia</Td>
          <Td>Goiás</Td>
          <Td>FIELD</Td>
          <Td>Buscando técnico</Td>
          <Td>Renan Felisberto</Td>
          <Td>Lupa</Td>
        </Tr>
      </TableBody>
    </Table>
  );
};

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
