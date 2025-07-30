
/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    viewport: { options: {
        xsm: { name: "XSmall", styles: { width: "320px", height: "900px" } },
        sm: { name: "Small", styles: { width: "640px", height: "900px" } },
        md: { name: "Medium", styles: { width: "768px", height: "900px" } },
        lg: { name: "Large", styles: { width: "1024px", height: "900px" } },
        xl: { name: "XL", styles: { width: "1280px", height: "900px" } },
        "2xl": { name: "2XL", styles: { width: "1536px", height: "900px" } },
      },
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
