import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Skeleton } from "../src";
import { ColorVariant } from "../src/types";

export default {
  title: "Feedback/Skeleton",
  component: Skeleton,

  args: {
    width: 100,
    height: 100,
    rows: 1,
    rounded: true,
  },

  argTypes: {
    rounded: {
      control: { type: "boolean" },
    },
    width: {
      control: { type: "range", min: 0, max: 250, step: 1 },
    },
    height: {
      control: { type: "range", min: 0, max: 250, step: 1 },
    },
    rows: {
      control: { type: "range", min: 1, max: 10, step: 1 },
    },
  },
} as ComponentMeta<typeof Skeleton>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

//π Each story then reuses that template
export const Line = Template.bind({});
Line.args = { width: 200, height: 10 };

//π Each story then reuses that template
export const Circle = Template.bind({});
Circle.args = { width: 100, height: 100 };

//π Each story then reuses that template
export const Rectangle = Template.bind({});
Rectangle.args = { height: 100, width: 250, rounded: false };

export const Compouted = () => {
  return (
    <>
      <Skeleton height={50} width={50} />
      <Skeleton height={10} width={150} />
      <Skeleton height={10} width={100} />
      <Skeleton height={80} width={150} rounded={false} />
    </>
  );
};
