import React, { FC, useLayoutEffect, useMemo, useRef } from "react";
import { WebAudioKnobProps } from "./WebAudioKnob.types";

export const WebAudioKnob: FC<WebAudioKnobProps> = (
  props: WebAudioKnobProps
) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const { current } = ref;
    if (current !== undefined) {
      // @ts-ignore
      current?.addEventListener("input", (event: any) => {
        props.onKnobInput && props?.onKnobInput(parseFloat(event.target.value));
        props.onKnobEvent && props?.onKnobEvent(event);
      });
    }
  }, [ref]);

  const threeColors = useMemo(() => {
    return `${props.indicatorColor};${props.bodyColor};${props.highlightColor};`;
  }, [props.highlightColor, props.bodyColor, props.indicatorColor]);

  // @ts-ignore
  return (
    <webaudio-knob
      id={props?.id ? props.id : "knob"}
      ref={ref}
      colors={threeColors ?? ""}
      {...props}
    />
  );
};
