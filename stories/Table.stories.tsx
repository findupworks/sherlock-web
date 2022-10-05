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
      <TableHead divider>
        <Th>Name</Th>
        <Th>Document Type</Th>
        <Th>Size</Th>
        <Th>Status</Th>
        <Th>Modified Data</Th>
        <Th>Create Data</Th>
      </TableHead>
      <TableBody>
        <Tr>
          <Td>Text cell</Td>
          <Td>Text Cell</Td>
          <Td>553 KB</Td>
          <Td>LABEL TEXT</Td>
          <Td>20 Seconds Ago</Td>
          <Td>20 Seconds Ago</Td>
        </Tr>
        <Tr>
          <Td>Text cell 2</Td>
          <Td>Text Cell 2</Td>
          <Td>553 KB 2</Td>
          <Td>LABEL TEXT 2</Td>
          <Td>20 Seconds Ago 2</Td>
          <Td>20 Seconds Ago 2</Td>
        </Tr>
      </TableBody>
    </Table>
  );
};

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
