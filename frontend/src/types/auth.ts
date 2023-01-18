import { ReactNode } from "react";
import { httpReponse } from "./httpReponse";

export type data = {
  username: string;
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
  signout: () => void;
  tokenAuth: string | null;
  isLogged: boolean;
  isLoading: boolean;
}

export interface providerProp {
  children: ReactNode;
}

export   type validateData = { username?: string; password?: string; remember?: boolean };
