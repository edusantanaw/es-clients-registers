export type apiResponse = {
  data: {
    results: users[];
  };
};

export type users = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    username: string;
  };
  picture: {
    large: string;
  };
  registered: {
    age: number;
  };
};
