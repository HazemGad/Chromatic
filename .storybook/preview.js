import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: 'responsive', // or 'mobile1', 'tablet', etc.
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
