import { MouseEvent, ReactElement } from 'react';

export interface IProps {
  buttonText?: string;
  imgIcon?: ReactElement;
  isSelected?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  toggleMinimize?: boolean;
  styles?: string;
  type?: string;
}
export interface IStyle {
  isSelected: boolean;
}
