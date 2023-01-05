export interface WebAudioSwitchProps {
  ref?: any;
  id?: string;
  src?: string;
  value?: 0 | 1;
  defvalue?: 0 | 1;
  min?: number;
  max?: number;
  width?: number;
  height?: number;
  diameter?: number;
  type?: "toggle" | "kick" | "radio";
  group?: string | null;
  invert?: 0 | 1;
  tooltip?: string | null;
  enable?: 0 | 1;
  colors?: string;
  outline?: 0 | 1 | string;
  midilearn?: string;
  midicc?: string;
  onSwitchClick?: (value: any) => void;
  onSwitchClickEvent?: (event: any) => void;
  onSwitchChange?: (value: any) => void;
  onSwitchChangeEvent?: (event: any) => void;
}
