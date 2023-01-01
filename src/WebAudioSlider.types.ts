export interface WebAudioSliderProps {
  ref?: any;
  id?: string;
  onSliderInput?: (value: number) => void;
  onSliderEvent?: (event: any) => void;
  src?: string;
  knobsrc?: string;
  tracking?: "rel" | "abs";
  value?: number;
  defvalue?: number;
  min?: number;
  max?: number;
  step?: number;
  direction?: "horizontal" | "vertical";
  width?: number;
  height?: number;
  knobwidth?: number;
  knobheight?: number;
  ditchlength?: number;
  colors?: string;
  sprites?: number | null;
  sensitivity?: number;
  log?: 0 | 1; // int, 1 = logarithmic, 0 = linear
  valuetip?: 0 | 1;
  tooltip?: string | null;
  conv?: string | null;
  enable?: 0 | 1;
  outline?: 0 | 1 | string; // 0, 1, 1px border #000
  midilearn?: 0 | 1;
  midicc?: string | null;
}
