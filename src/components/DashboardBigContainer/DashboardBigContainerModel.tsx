export interface IProps {
  titleText: string;
  lists?: {
    name: string;
    description: string;
    date?: string;
  }[];
  switchCard?: boolean;
}
export interface IListProps {}
