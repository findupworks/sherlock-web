import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Pagination } from "../src/components/Pagination";
import { PaginationEntries } from "../src/components/Pagination";

export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Data Display/Pagination",
  component: Pagination,

  args: {
    //π Now all Button stories will be primary.
  },
  argTypes: {
    variant: {
      options: ["default", "vertical"],
      control: { type: "select" },
    },
    entrieOrientation: {
      options: ["up", "down"],
      control: { type: "radio" },
    },
    entries: {
      options: [PaginationEntries.ten, PaginationEntries.twenty, PaginationEntries.fifty, PaginationEntries.hundred],
      control: { type: "select" },
    },
    entrieLabel: {
      type: "string",
    },
    showingLabel: {
      type: "string",
    },
    ofLabel: {
      type: "string",
    },
    toLabel: {
      type: "string",
    },
  },
} as ComponentMeta<typeof Pagination>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  variant: "default",
  totalPages: 10,
  totalEntries: 100,
  currentPage: 3,
  entrieOrientation: "up",
};

export const Example = () => {
  const [page, setPage] = useState(5);
  return <Pagination currentPage={page} totalPages={10} totalEntries={100} onChangePage={setPage} variant="vertical" />;
};
