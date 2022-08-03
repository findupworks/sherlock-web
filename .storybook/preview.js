import { configure, addParameters, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered/react';
// import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import 'tailwindcss/tailwind.css';
import theme from "./theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  docs: {
    theme: theme,
  },
}

