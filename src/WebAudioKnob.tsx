import React, { FC, useMemo } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WebAudioKnobProps } from "./WebAudioKnob.types";

export const WebAudioKnob: FC<WebAudioKnobProps> = (
  props: WebAudioKnobProps
) => {
  const ref = React.useRef(null);

  React.useLayoutEffect(() => {
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
