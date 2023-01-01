import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WebAudioKeyboard } from "../WebAudioKeyboard";

export default {
  title: "WebAudioKeyboard",
  component: WebAudioKeyboard,
  control: true,
} as ComponentMeta<typeof WebAudioKeyboard>;

const Template: ComponentStory<typeof WebAudioKeyboard> = () => (
  <>
    <br />
    <br />
    <WebAudioKeyboard />
  </>
);

export const Default = Template.bind({});
