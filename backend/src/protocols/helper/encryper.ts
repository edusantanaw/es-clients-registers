

export interface IEncrypter {
    genHash: (password: string) => Promise<string>;
    compare: (password: string, hashedPassword: string) => Promise<boolean>;
  }