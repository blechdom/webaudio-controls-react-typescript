import React, { FC, useEffect, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WebAudioKnob } from "../WebAudioKnob";

export default {
  title: "WebAudioKnob",
  component: WebAudioKnob,
  control: true,
} as ComponentMeta<typeof WebAudioKnob>;

const Template: ComponentStory<typeof WebAudioKnob> = (args) => (
  <WebAudioKnob {...args} />
);

export const Default = Template.bind({});

Default.args = {
  src: "",
  value: 0,
  defvalue: 0,
  min: 0,
  max: 100,
  step: 1,
  width: null,
  height: null,
  diameter: 200,
  sprites: null,
  sensitivity: 1,
  log: 0,
  valuetip: 1,
  tooltip: "tooltip text",
  conv: null,
  enable: 1,
  bodyColor: "#000",
  highlightColor: "#fff",
  indicatorColor: "#e00",
  outline: 0,
  midilearn: 0,
  midicc: null,
};

export const Gallery = () => {
  return (
    <>
      <WebAudioKnob src={"./images/Aqua.png"} />
      <WebAudioKnob src={"./images/Carbon.png"} />
      <WebAudioKnob src={"./images/Chromed.png"} />
      <WebAudioKnob src={"./images/Jambalaya.png"} />
      <WebAudioKnob src={"./images/JP8000.png"} />
      <WebAudioKnob src={"./images/lineshadow2.png"} />
      <WebAudioKnob src={"./images/LittlePhatty.png"} />
      <WebAudioKnob src={"./images/m400.png"} />
      <WebAudioKnob src={"./images/MiniMoog_Main.png"} />
      <WebAudioKnob src={"./images/nice_lamp_knob.png"} />
      <WebAudioKnob src={"./images/plastic_knob.png"} />
      <WebAudioKnob src={"./images/simpleBlue.png"} />
      <WebAudioKnob src={"./images/SimpleFlat3.png"} />
      <WebAudioKnob src={"./images/simplegray.png"} />
      <WebAudioKnob src={"./images/vernier.png"} />
      <WebAudioKnob src={"./images/Vintage_Knob.png"} />
      <WebAudioKnob src={"./images/yellow.png"} sprites={127} />
      <WebAudioKnob src={"./images/golfBallKnob.png"} />
      <WebAudioKnob src={"./images/golfBallKnobLight.png"} />
      <WebAudioKnob src={"./images/golfBallKnobLightPan.png"} value={50} />
      <WebAudioKnob src={"./images/lineshadow.png"} />
      <WebAudioKnob
        src={"./images/WOK_vintage_AbbeyRoad_PAN_Knob.png"}
        sprites={127}
        value={50}
      />
    </>
  );
};

export const ImageSliders = () => {
  return (
    <>
      <WebAudioKnob src={"./images/slider.png"} sprites={60} />;
      <WebAudioKnob src={"./images/golfBallSliderRed.png"} sprites={52} />
      ;
      <WebAudioKnob src={"./images/golfBallSlider.png"} sprites={4} />;
    </>
  );
};

export const Controlled: FC = () => {
  const [knobValue, setKnobValue] = useState<number>(0);

  return (
    <>
      <input
        type={"number"}
        min={0}
        max={100}
        value={knobValue}
        onChange={(event) => setKnobValue(parseFloat(event.target.value))}
      />
      <br />
      <br />
      <WebAudioKnob
        bodyColor="#000"
        highlightColor="#fff"
        indicatorColor="#e00"
        defvalue={0}
        value={knobValue}
        onKnobEvent={(event) => setKnobValue(parseFloat(event.target.value))}
      />
    </>
  );
};
