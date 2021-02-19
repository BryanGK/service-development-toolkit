import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import RadioButton from '../src/RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <RadioButton {...args} />
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <RadioButton {...args} />
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <RadioButton {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Lorem ipsum dolor sit amet',
  size: 'medium',
  name: 'samename',
};
