import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Badge } from "../src";

export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Data Display/Badge",
  component: Badge,

  args: {
    //π Now all Button stories will be primary.
  },
  argTypes: {
    variant: {
      options: ["default", "kanban"],
      control: { type: "select" },
    },
    color: {
      options: ["default", "primary", "secondary", "danger", "warning", "info", "success"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Badge>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: "Default", color: "default" };

export const Primary = Template.bind({});
Primary.args = { label: "Primary", color: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", color: "secondary" };

export const Success = Template.bind({});
Success.args = { label: "Success", color: "success" };

export const Danger = Template.bind({});
Danger.args = { label: "Danger", color: "danger" };

export const Warning = Template.bind({});
Warning.args = { label: "Warning", color: "warning" };

export const Info = Template.bind({});
Info.args = { label: "Info", color: "info" };
