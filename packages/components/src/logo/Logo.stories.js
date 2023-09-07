import Logo from './Logo.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
  },
};

export const Default = {
  args: {
    showMonogram: false
  },
};