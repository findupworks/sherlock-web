import React, {useEffect, useRef, useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ColorVariant } from '../src/types';
import { Popover, PopoverDirection } from '../src/components/Popover';
import { Badge, Button } from '../src';
import { ButtonSize } from '../src/components/Button';

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
    direction: PopoverDirection.t,
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
      options: [PopoverDirection.t, PopoverDirection.b, PopoverDirection.l, PopoverDirection.r],
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
        variant={ColorVariant.primary}
        id="referenceElement"
        size={ButtonSize.sm}
      />
    </div>
  )

};

export const Default = Template.bind({});
Default.args = {popoverText:"popoverText", tooltipText:"tooltipText"}