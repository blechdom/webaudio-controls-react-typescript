import React, { FC, useEffect, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WebAudioKnob } from "../WebAudioKnob";
import { WebAudioParam } from "../WebAudioParam";

export default {
  title: "WebAudioParam",
  component: WebAudioParam,
} as ComponentMeta<typeof WebAudioParam>;

export const Gallery = () => {
  return (
    <>
      <WebAudioParam />
    </>
  );
};

export const Linked = () => {
  return (
    <>
      <WebAudioKnob
        diameter={100}
        bodyColor="#000"
        highlightColor="#fff"
        indicatorColor="#e00"
        id="knob"
      />
      <br />
      <br />
      <WebAudioParam
        width={100}
        height={50}
        fontsize={50}
        link="knob"
        colors={"#000;#FF0000"}
        outline="3px solid #000"
      />
    </>
  );
};

export const Controlled: FC = () => {
  const [paramValue, setParamValue] = useState<number>(0);

  return (
    <>
      <input
        type={"number"}
        min={0}
        max={100}
        value={paramValue}
        onChange={(event) => setParamValue(parseFloat(event.target.value))}
      />
      <br />
      <br />
      <WebAudioParam
        width={100}
        height={50}
        fontsize={50}
        link="knob"
        colors={"#000;#FF0000"}
        value={paramValue}
        onParamEvent={(event) => setParamValue(parseFloat(event.target.value))}
      />
    </>
  );
};
