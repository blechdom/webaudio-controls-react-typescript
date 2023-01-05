import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WebAudioSwitch } from "../WebAudioSwitch";

export default {
  title: "WebAudioSwitch",
  component: WebAudioSwitch,
  control: true,
} as ComponentMeta<typeof WebAudioSwitch>;

const Template: ComponentStory<typeof WebAudioSwitch> = (args) => (
  <>
    <WebAudioSwitch id="sw-toggle" {...args} />
    <br />
    <br />
    <WebAudioSwitch id="sw-kick" type="kick" {...args} />
    <br />
    <br />
    <WebAudioSwitch id="sw-radio-1" type="radio" group="1" {...args} />
    <WebAudioSwitch id="sw-radio-2" type="radio" group="1" {...args} />
    <WebAudioSwitch id="sw-radio-3" type="radio" group="1" {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {};
export const ToggleGallery = () => {
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

export const KickGallery = () => {
  return (
    <>
      <WebAudioSwitch type="kick" />
      <WebAudioSwitch src="./images/redbutton128.png" type="kick" />
      <WebAudioSwitch src="./images/green_button.png" type="kick" />
      <WebAudioSwitch src="./images/prophet5_button.png" type="kick" />
      <WebAudioSwitch src="./images/golfBallButton.png" type="kick" />
      <WebAudioSwitch src="./images/switch_press.png" type="kick" />
      <WebAudioSwitch src="./images/golfBallSwitchBW.png" type="kick" />
    </>
  );
};

export const RadioGallery = () => {
  return (
    <>
      <WebAudioSwitch id="default-sw1" type="radio" group="storybook" />
      <WebAudioSwitch id="default-sw2" type="radio" group="storybook" />
      <WebAudioSwitch id="default-sw3" type="radio" group="storybook" />
      <WebAudioSwitch id="default-sw4" type="radio" group="storybook" />
      <WebAudioSwitch id="default-sw5" type="radio" group="storybook" />
      <WebAudioSwitch id="default-sw6" type="radio" group="storybook" />
      <WebAudioSwitch id="default-sw7" type="radio" group="storybook" />
      <br />
      <br />
      <WebAudioSwitch
        id="green-sw1"
        src="./images/green_button.png"
        type="radio"
        group="storybook2"
      />
      <WebAudioSwitch
        id="green-sw2"
        src="./images/green_button.png"
        type="radio"
        group="storybook2"
      />
      <WebAudioSwitch
        id="green-sw3"
        src="./images/green_button.png"
        type="radio"
        group="storybook2"
      />
      <WebAudioSwitch
        id="green-sw4"
        src="./images/green_button.png"
        type="radio"
        group="storybook2"
      />
      <WebAudioSwitch
        id="green-sw5"
        src="./images/green_button.png"
        type="radio"
        group="storybook2"
      />
      <br />
      <br />
      <WebAudioSwitch
        id="golf-sw1"
        src="./images/golfBallSwitchBW.png"
        type="radio"
        group="storybook3"
      />
      <WebAudioSwitch
        id="golf-sw2"
        src="./images/golfBallSwitchBW.png"
        type="radio"
        group="storybook3"
      />
      <WebAudioSwitch
        id="golf-sw3"
        src="./images/golfBallSwitchBW.png"
        type="radio"
        group="storybook3"
      />
      <WebAudioSwitch
        id="golf-sw4"
        src="./images/golfBallSwitchBW.png"
        type="radio"
        group="storybook3"
      />
      <WebAudioSwitch
        id="golf-sw5"
        src="./images/golfBallSwitchBW.png"
        type="radio"
        group="storybook3"
      />
    </>
  );
};
