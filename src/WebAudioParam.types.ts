export interface WebAudioParamProps {
  ref?: any;
  id?: string;
  src?: string | null;
  value?: number;
  width?: number;
  height?: number;
  fontsize?: number;
  colors?: string;
  outline?: 0 | 1 | string;
  link?: string | null;
  rconv?: string | null;
  onParamInput?: (value: number) => void;
  onParamEvent?: (event: any) => void;
}
