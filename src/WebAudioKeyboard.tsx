import React, { FC } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WebAudioKeyboardProps } from "./WebAudioKeyboard.types";

export const WebAudioKeyboard: FC<WebAudioKeyboardProps> = (
  props: WebAudioKeyboardProps
) => {
  return <webaudio-keyboard {...props} />;
};
