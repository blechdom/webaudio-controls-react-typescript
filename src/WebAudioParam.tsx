import React, { FC } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WebAudioParamProps } from "./WebAudioParam.types";

export const WebAudioParam: FC<WebAudioParamProps> = (
  props: WebAudioParamProps
) => {
  // @ts-ignore
  return <webaudio-param {...props} />;
};
