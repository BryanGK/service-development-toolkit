import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Input from '../src/Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Input {...args}>Input</Input>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Input {...args}>Input</Input>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Input {...args}>Input</Input>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'Field Label',
  variant: 'standard',
  size: ['small', 'medium', 'large'],
  required: false,
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Field Label',
  variant: 'warning',
  size: ['small', 'medium', 'large'],
  required: false,
};
