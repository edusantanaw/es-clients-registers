export type address = {
  number: number;
  street: string;
  city: string;
};

export type client = {
  id?: string;
  name: string;
  email: string;
  phone: number;
  address: address;
  cpf: string;
};
