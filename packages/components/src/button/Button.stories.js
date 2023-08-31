import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    elevated: { control: 'boolean' },
    onToggle: { action: 'toggle' }
  },
};

export const Primary = {
  args: {
    label: 'Button'
  },
};

export const Disabled = {
  args: {...Primary.args, ...{
    disabled: true
  }}
};

export const Elevated = {
  args: {...Primary.args, ...{
    elevated: true
  }}
};

export const Tag = {
  args: {...Primary.args, ...{
    tag: true,
    style: `--doxy-button-accent: red`
  }}
};