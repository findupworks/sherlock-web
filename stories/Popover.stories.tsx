import React, {useEffect, useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Popover } from '../src/components/Popover';
import { Button } from '../src';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Popover',
  component: Popover,

  args: {
    tooltipText: "Tooltip text",
    popoverText: "Popover text",
    showPopover:false,
    direction: 'top',
    //👇 Now all Button stories will be primary.
  },
  argTypes: {
    tooltipText:{
      type:"string",
      description: "Texto que vai na parte do título do popover."
    },
    popoverText:{
      type:"string",
      description: "Texto que vai no body do popover."
    },
    showPopover:{
      type:"boolean",
      description: "Variável de controle para aparecer ou não o popover."
    },
    direction:{
      options: ['top', 'bottom', 'left', 'right'],
      control: {type:"select"},
      description: "Direções em que o popover pode aparecer em relação ao seu target."
    },
    target:{
      control:{type:"string"},
      description: "Id do elemento que o popover tem interação."
    }

  }
} as ComponentMeta<typeof Popover>;


//👇 Each story then reuses that template
const Template: ComponentStory<typeof Popover> = (args)=>{
  const [showPopover, setShowPopover] = useState(false);

  useEffect(()=>{
    setShowPopover(args.showPopover);
  }, [args.showPopover]);


  return(
    <div>
      <Popover
        tooltipText={args.tooltipText}
        popoverText={args.popoverText}
        showPopover={showPopover}
        direction={args.direction}
        target="referenceElement"
      />
      <Button
        label="Mostrar Popover"
        onClick={()=>setShowPopover(!showPopover)}
        id="referenceElement"
        size={"sm"}
      />
    </div>
  )

};

export const Default = Template.bind({});
Default.args = {popoverText:"popoverText", tooltipText:"tooltipText"}