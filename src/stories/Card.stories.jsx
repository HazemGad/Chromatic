// src/stories/Card.stories.jsx
import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    chromatic: {
      defaultViewport: [320,768,1024,1440],
    },
  },
  
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hello Cardddddddddddddddddddddddddddddddddddddddddddddd',
  content: 'This is the card content.',
  footer: 'Footer content here.',
};
