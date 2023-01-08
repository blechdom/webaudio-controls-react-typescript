import React, { FC, useLayoutEffect, useRef } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WebAudioParamProps } from "./WebAudioParam.types";

export const WebAudioParam: FC<WebAudioParamProps> = (
  props: WebAudioParamProps
) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const { current } = ref;
    if (current !== undefined) {
      // @ts-ignore
      current?.addEventListener("change", (event: any) => {
        props.onParamInput &&
          props?.onParamInput(parseFloat(event.target.value));
        props.onParamEvent && props?.onParamEvent(event);
      });
    }
  }, [ref]);

  // @ts-ignore
  return (
    <webaudio-param id={props?.id ? props.id : "param"} ref={ref} {...props} />
  );
};
