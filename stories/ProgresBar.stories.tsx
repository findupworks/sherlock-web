import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProgressBar } from '../src/components/ProgressBar';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/ProgressBar',
  component: ProgressBar,

  args: {
    //π Now all Button stories will be primary.
  },
  argTypes: {
   progress:{
    description: "Porcentagem do progresso em formato de 0 a 100."
   },
   type: {
    type: 'string',
    description: "Para uso da progress bar no kanban, passar o type 'kanban' "
   },
   isFinished: {
    type: 'string',
    description: "Propriedade para uso no type kanban,passe uma string com um dos seguintes tipos,(progress),(success),(error)"
   }
  }
} as ComponentMeta<typeof ProgressBar>;


//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});
Default.args = { progress: 0 };
