import { ReactElement } from 'react';

export interface IProps {
  children?: ReactElement;
}

export interface ISideMenuBtns {
  btnText?: string;
  handleClickFunc?: any;
  icon?: ReactElement;
  selected?: boolean;
}
