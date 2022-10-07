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
  const head = [
    "OS",
    "Agendamento",
    "Cliente",
    "Especialista",
    "Endereço",
    "Cidade",
    "Estado",
    "Tipo",
    "Status",
    "Responsável",
    "Ação",
  ];

  const occurrence = [
    "#65756",
    "Recife: 31/03/3030 | 08:00",
    "Loccitane",
    "Renan Felisberto",
    "Avenida Vilas Boas 1749, Sobreloja 4 - centro",
    "Goiânia",
    "Goiás",
    "FIELD",
    "Buscando técnico",
    "Renan Felisberto",
    "Lupa",
  ];

  return (
    <Table>
      <TableHead>
        <Th status></Th>
        {head.map((item) => {
          return <Th>{item}</Th>;
        })}
      </TableHead>
      <TableBody>
        <Tr>
          <Td status statusColor="secondary"></Td>
          {occurrence.map((occ) => {
            return <Td>{occ}</Td>;
          })}
        </Tr>
        <Tr>
          <Td status statusColor="secondary"></Td>
          {occurrence.map((occ) => {
            return <Td>{occ}</Td>;
          })}
        </Tr>
      </TableBody>
    </Table>
  );
};

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
