import { configure, addParameters, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered/react';

import theme from "./theme";
import { addons } from "@storybook/addons";

// addParameters({
//     options: {
//         theme,
//     },
// });

// addDecorator(withInfo);
// addDecorator(centered);

// configure(require.context('../stories', true, /\.stories\.tsx$\), module);

addons.setConfig({
    theme: theme
})