import React, { FC, useLayoutEffect, useRef } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WebAudioSliderProps } from "./WebAudioSlider.types";

export const WebAudioSlider: FC<WebAudioSliderProps> = (
  props: WebAudioSliderProps
) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const { current } = ref;
    if (current !== undefined) {
      // @ts-ignore
      current?.addEventListener("input", (event: any) => {
        props.onSliderInput &&
          props?.onSliderInput(parseFloat(event.target.value));
        props.onSliderEvent && props?.onSliderEvent(event);
      });
    }
  }, [ref]);
  // @ts-ignore
  return (
    <webaudio-slider
      id={props?.id ? props.id : "slider"}
      ref={ref}
      {...props}
    />
  );
};
