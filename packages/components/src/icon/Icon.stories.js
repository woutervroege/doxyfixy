import Icon from './Icon.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: {type: 'select'}, options: ['search', 'close'], },
  },
};

export const Primary = {
  args: {
    icon: 'close'
  },
};