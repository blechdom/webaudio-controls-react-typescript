export interface WebAudioKeyboardProps {
  ref?: any;
  id?: string;
  values?: number | number[];
  keys?: number;
  colors?: string;
  width?: number | null;
  height?: number | null;
  min?: number;
  outline?: 0 | 1 | string;
  enable?: 0 | 1;
  onKeyboardChangeNote?: (value: any) => void;
  onKeyboardChangeEvent?: (event: any) => void;
}
