import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ColorVariant } from '../src/types';
import { Tooltip, TooltipDirection } from '../src/components/Tooltip';
import { Button } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Tooltip',
  component: Tooltip,

  args: {
    tooltipText: "Tooltip text",
    direction: TooltipDirection.t,
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    tooltipText:{
      type:"string",
      description: "Texto do tooltip."
    },
    direction:{
      options: [
        TooltipDirection.t, TooltipDirection.ts, TooltipDirection.te, 
        TooltipDirection.b, TooltipDirection.bs, TooltipDirection.be, 
        TooltipDirection.l, TooltipDirection.ls, TooltipDirection.le,  
        TooltipDirection.r, TooltipDirection.rs, TooltipDirection.re,  
      ],
      control: {type:"select"},
      description: "Direções que o tooltip pode ter em relação ao seu target."
    },
    target:{
      control:{type:"string"},
      description:"Id do elemento que o tooltip tem interação."
    }

  }
} as ComponentMeta<typeof Tooltip>;

//👇 Each story then reuses that template
const Template: ComponentStory<typeof Tooltip> = (args)=>{
  return(
    <div>
      <Tooltip
        tooltipText={args.tooltipText}
        direction={args.direction}
        target="referenceElement"
      />
      <Button
        label="Mostrar Tooltip"
        variant={ColorVariant.primary}
        id="referenceElement"
      />
    </div>
  )

};

export const Default = Template.bind({});
Default.args = {tooltipText: "tooltipText"}