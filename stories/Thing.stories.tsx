import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DropdownSearch, Props } from '../src';

const list = [
  'options',
  'long options',
  'options with icon',
  'long long options',
  'very long options',
  'very long long options',
];

const meta: Meta = {
  title: 'Components',
  component: DropdownSearch,
  argTypes: {
    list: {
      control: {
        type: 'array',
      },
    },
  },
};

export default meta;

const Template: Story<Props> = args => <DropdownSearch {...args} list={list} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
