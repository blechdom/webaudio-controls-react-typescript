import React, { FC, useLayoutEffect, useMemo, useRef } from "react";
import { WebAudioSwitchProps } from "./WebAudioSwitch.types";

export const WebAudioSwitch: FC<WebAudioSwitchProps> = (
  props: WebAudioSwitchProps
) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const { current } = ref;
    if (current !== undefined) {
      // @ts-ignore
      current?.addEventListener("click", (event: any) => {
        props.onSwitchClick && props?.onSwitchClick(event.target.value);
        props.onSwitchClickEvent && props?.onSwitchClickEvent(event);
      });
      // @ts-ignore
      current?.addEventListener("change", (event: any) => {
        props.onSwitchChange && props?.onSwitchChange(event.target.value);
        props.onSwitchChangeEvent && props?.onSwitchChangeEvent(event);
      });
    }
  }, [ref]);

  // @ts-ignore
  return (
    <webaudio-switch
      id={props?.id ? props.id : "switch"}
      ref={ref}
      {...props}
    />
  );
};
