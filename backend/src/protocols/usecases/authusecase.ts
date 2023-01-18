interface authUseCase {
  auth: (username: string, password: string) => Promise<string>;
}

type creadentials = {
  username: string;
  password: string;
};

export { authUseCase, creadentials };
