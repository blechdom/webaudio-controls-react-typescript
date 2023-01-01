import "./webaudio-controls-module";
import { DOMAttributes } from "react";
import {
  WebAudioKnob,
  WebAudioSlider,
  WebAudioSwitch,
  WebAudioParam,
  WebAudioKeyboard,
} from "./webaudio-controls-module";

type CustomEvents<K extends string> = {
  [key in K]: (event: CustomEvent) => void;
};
type CustomElement<T, K extends string = ""> = Partial<
  T & DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["webaudio-knob"]: CustomElement<WebAudioKnob>;
      ["webaudio-slider"]: CustomElement<WebAudioSlider>;
      ["webaudio-switch"]: CustomElement<WebAudioSwitch>;
      ["webaudio-param"]: CustomElement<WebAudioParam>;
      ["webaudio-keyboard"]: CustomElement<WebAudioKeyboard>;
    }
  }
}
