import Tag from "./Tag.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: "Example/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    label: { control: { type: "text" } },
  },
};

export const Default = {
  args: {
    label: "Tag",
  },
};
