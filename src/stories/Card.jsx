import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => (
  <div style={{ width: '375px' }}> {/* Simulate mobile */}
    <Card {...args} />
  </div>
);

export const Mobile = Template.bind({});
Mobile.args = {
  title: 'Mobile View',
  content: 'This is a card on mobile.',
  footer: 'Footer content',
};

export const Desktop = (args) => (
  <div style={{ width: '1024px' }}>
    <Card {...args} />
  </div>
);
Desktop.args = {
  title: 'Desktop View',
  content: 'This is a card on desktop.',
  footer: 'Footer content',
};
