import Button from "./Button.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    icon: { control: "text" },
    onToggle: { action: "toggle" },
    icon: { control: { type: "select" }, options: ["search", "close"] },
  },
};

export const Default = {
  args: {
    label: "Button",
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    ...{
      disabled: true,
    },
  },
};

export const Selectable = {
  args: {
    ...Default.args,
    ...{
      selectable: true,
    },
  },
};

export const Icon = {
  args: {
    ...Default.args,
    ...{
      label: "",
      icon: "search",
    },
  },
};
