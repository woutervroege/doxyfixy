import Card from "./Card.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: { control: { type: "text" } },
    subtitle: { control: { type: "text" } },
    tags: { control: { type: "array" } },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "hero", "portrait"],
    },
  },
};

export const Small = {
  args: {
    title: "Film titel",
    subtitle:
      "Een zomerse feelgoodfilm met Laure Calamy, Olivia Côte en Kristin Scott Thomas. De onlangs gescheiden Blandine (Côte) zit middenin een midlifecrisis.",
    tags: ["apples", "pears", "bananas"],
    size: "small",
  },
};

export const Medium = {
  args: { ...Small.args, ...{ size: "medium" } },
};

export const Large = {
  args: { ...Small.args, ...{ size: "large" } },
};

export const Hero = {
  args: { ...Small.args, ...{ size: "hero" } },
};

export const Portrait = {
  args: {
    ...Small.args,
    ...{ size: "portrait", subtitle: "Christopher Nolan" },
  },
};
