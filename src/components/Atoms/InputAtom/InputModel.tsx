import { FormEvent } from 'react';

export interface IProps {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

// type="text"
//  name="email"
//  value={loginData.email}
//  onChange={handleLoginData}
//  placeholder="Enter Email"
