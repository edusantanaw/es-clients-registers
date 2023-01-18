import { ReactNode } from "react";
import { httpReponse } from "./httpReponse";

export type data = {
  email: string;
  password: string;
  remember: boolean;
};

export type response = {
  data: {
    accessToken: string;
    user: string;
  };
};

export interface AuthContextData {
  auth: (data: data) => Promise<httpReponse>;
  signup: (data: data) => Promise<httpReponse>;
  signout: () => void;
  tokenAuth: string | null;
  isLogged: boolean;
  isLoading: boolean;
}

export interface providerProp {
  children: ReactNode;
}

export type validateData = {
  email?: string;
  password?: string;
  remember?: boolean;
};

export type validateSignupData = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  remember?: boolean;
};
