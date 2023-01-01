import { ForwardedRef } from "react";

export interface WebAudioKnobProps {
  ref?: any;
  id?: string;
  onKnobInput?: (value: number) => void;
  onKnobEvent?: (event: any) => void;
  src?: string | null;
  value?: number;
  colors?: string;
  defvalue?: number;
  min?: number;
  max?: number;
  step?: number;
  width?: number | null;
  height?: number | null;
  diameter?: number;
  sprites?: number | null;
  sensitivity?: number;
  log?: 0 | 1; // int, 1 = logarithmic, 0 = linear
  valuetip?: 0 | 1;
  tooltip?: string | null;
  conv?: string | null;
  enable?: 0 | 1;
  highlightColor?: string;
  bodyColor?: string;
  indicatorColor?: string;
  outline?: 0 | 1 | string; // 0, 1, 1px border #000
  midilearn?: 0 | 1;
  midicc?: string | null;
}
