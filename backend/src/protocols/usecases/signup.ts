export interface ISignupUsecase {
    execute: (email: string, password: string) => Promise<string>;
  }