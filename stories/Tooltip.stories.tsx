import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tooltip } from '../src/components/Tooltip';
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
    direction: 'top',
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    tooltipText:{
      type:"string",
      description: "Texto do tooltip."
    },
    direction:{
      options: [
        'right', 'right-start', 'right-end', 
        'left', 'left-start', 'left-end', 
        'top', 'top-start', 'top-end', 
        'bottom', 'bottom-start', 'bottom-end'
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
        id="referenceElement"
      />
    </div>
  )

};

export const Default = Template.bind({});
Default.args = {tooltipText: "tooltipText"}