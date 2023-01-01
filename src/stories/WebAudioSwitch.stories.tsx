import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WebAudioSwitch } from "../WebAudioSwitch";

export default {
  title: "WebAudioSwitch",
  component: WebAudioSwitch,
} as ComponentMeta<typeof WebAudioSwitch>;

export const Gallery = () => {
  return (
    <>
      <WebAudioSwitch />
      <WebAudioSwitch src="./images/switch_toggle.png" />
      <WebAudioSwitch src="./images/redbutton128.png" />
      <WebAudioSwitch src="./images/green_button.png" />
      <WebAudioSwitch src="./images/power_switch.png" />
      <WebAudioSwitch src="./images/prophet5_button.png" />
      <WebAudioSwitch src="./images/solo.png" />
      <WebAudioSwitch src="./images/stainless_switch.png" />
      <WebAudioSwitch src="./images/switch_mode.png" />
      <WebAudioSwitch src="./images/switch_slide.png" />
      <WebAudioSwitch src="./images/golfBallButton.png" />
      <WebAudioSwitch src="./images/switch_press.png" />
      <WebAudioSwitch src="./images/golfBallSwitchBW.png" />
    </>
  );
};

const Template: ComponentStory<typeof WebAudioSwitch> = (args) => (
  <WebAudioSwitch {...args} />
);

export const Default = Template.bind({});

Default.args = {};
