import Header from "./Header.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {},
};
