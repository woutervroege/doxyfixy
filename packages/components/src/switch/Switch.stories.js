import Switch from "./Switch.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: "Example/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    on: { control: "boolean" },
    offLabel: { control: "text" },
    onLabel: { control: "text" },
    onToggle: { action: "toggle" },
  },
};

export const Off = {
  args: {
    on: false,
    offLabel: "EN",
    onLabel: "NL",
  },
};

export const On = {
  args: {
    ...Off.args,
    ...{
      on: true,
    },
  },
};
