export interface InitialUserDataProps {
  userDetails: {
    name: string;
    password: string;
    email: string;
  };
}

export const userData: InitialUserDataProps = {
  userDetails: {
    email: '',
    password: '',
    name: '',
  },
};
