import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WebAudioKeyboard } from "../WebAudioKeyboard";

export default {
  title: "WebAudioKeyboard",
  component: WebAudioKeyboard,
  control: true,
} as ComponentMeta<typeof WebAudioKeyboard>;

const Template: ComponentStory<typeof WebAudioKeyboard> = (args) => (
  <WebAudioKeyboard {...args} />
);

export const Default = Template.bind({});

export const EightyEight = Template.bind({});

EightyEight.args = {
  keys: 88,
  width: 800,
  height: 60,
};

export const CrazyColors = Template.bind({});

CrazyColors.args = {
  keys: 32,
  width: 800,
  height: 200,
  colors:
    "#ff0000;#DEFF00;#00ff00;#0061FF;#00E7FF;#FF7A00;#0000ff;#FF86F1;#FF00C9",
};
