import Input from './Input.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: { control: {type: 'text'}},
    placeholder: { control: {type: 'text'}},
  },
};

export const Default = {
  args: {
    placeholder: 'email address',
    value: 'john@johndoe.com'
  },
};