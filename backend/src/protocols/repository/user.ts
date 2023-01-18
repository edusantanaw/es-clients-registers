export type IUser = {
  id: string;
  email: string;
  password: string;
};

export interface IUserRepository {
  create: (email: string, password: string) => Promise<IUser>;
  loadByEmail: (email: string) => Promise<IUser | null>;
}
