import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
  },
};

export const Disabled = {
  args: {...Primary.args, ...{disabled: true}}
};
