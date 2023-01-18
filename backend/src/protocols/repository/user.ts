export type User = {
  id: string;
  email: string;
  password: string;
};

export interface IUserRepository {
  create: (email: string, password: string) => Promise<User>;
  loadByEmail: (email: string) => Promise<User>;
}
