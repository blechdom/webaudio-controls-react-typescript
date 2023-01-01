import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WebAudioSlider } from "../WebAudioSlider";

export default {
  title: "WebAudioSlider",
  component: WebAudioSlider,
  control: true,
} as ComponentMeta<typeof WebAudioSlider>;

const Template: ComponentStory<typeof WebAudioSlider> = (args) => (
  <WebAudioSlider {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export const Gallery = () => {
  return (
    <>
      <WebAudioSlider />
      <WebAudioSlider
        src={"./images/hsliderbody.png"}
        knobsrc={"./images/hsliderknob.png"}
        tracking={"rel"}
      />
      <br />
      <WebAudioSlider
        src={"./images/vsliderbody.png"}
        knobsrc={"./images/vsliderknob.png"}
        tracking={"rel"}
      />
      <br />
      <br />
      <div>
        <WebAudioSlider
          width={500}
          height={50}
          knobsrc={"./images/golfball-75.png"}
        />
      </div>
      <br />
      <br />
      <div>
        <WebAudioSlider
          width={500}
          height={56}
          knobsrc={"./images/golfball-50.png"}
        />
      </div>
      <br />
      <br />
      <div>
        <WebAudioSlider
          width={24}
          height={300}
          knobsrc={"./images/golfball-50.png"}
          colors={"#000000;#00ff00;#00ffff"}
        />
      </div>
    </>
  );
};
