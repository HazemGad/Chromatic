import React from 'react';
import Card from './Card';
import { allModes  } from '../../.storybook/modes';
export default {
component: Card,
  title: "ArticleCard",
  parameters: {
    chromatic: {
      modes: {
        mobile: allModes["small"],
        desktop: allModes["large"],
      },
    },
  },
};


const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hello Card',
  content: 'This is the card content.',
  footer: 'Footer content here.',
};
