import React, { FC } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WebAudioSliderProps } from "./WebAudioSlider.types";

export const WebAudioSlider: FC<WebAudioSliderProps> = (
  props: WebAudioSliderProps
) => {
  // @ts-ignore
  return <webaudio-slider {...props} />;
};
