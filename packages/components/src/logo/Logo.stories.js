import Logo from './Logo.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    showMonogram: { control: {type: 'boolean'}}
  },
};

export const Default = {
  args: {
    showMonogram: false
  },
};

export const WithMonogram = {
  args: {
    showMonogram: true
  },
};