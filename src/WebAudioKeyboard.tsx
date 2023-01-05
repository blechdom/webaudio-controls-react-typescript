import React, { FC, useLayoutEffect, useRef } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WebAudioKeyboardProps } from "./WebAudioKeyboard.types";

export const WebAudioKeyboard: FC<WebAudioKeyboardProps> = (
  props: WebAudioKeyboardProps
) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const { current } = ref;
    if (current !== undefined) {
      // @ts-ignore
      current?.addEventListener("change", (event: any) => {
        props.onKeyboardChangeNote && props?.onKeyboardChangeNote(event.note);
        props.onKeyboardChangeEvent && props?.onKeyboardChangeEvent(event);
      });
    }
  }, [ref]);

  return (
    <webaudio-keyboard
      id={props?.id ? props.id : "keyboard"}
      ref={ref}
      {...props}
    />
  );
};
