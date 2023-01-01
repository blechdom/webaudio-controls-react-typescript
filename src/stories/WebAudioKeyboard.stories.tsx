import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WebAudioKeyboard } from "../WebAudioKeyboard";

export default {
  title: "WebAudioKeyboard",
  component: WebAudioKeyboard,
} as ComponentMeta<typeof WebAudioKeyboard>;

export const Gallery = () => {
  return (
    <>
      <WebAudioKeyboard />
    </>
  );
};
