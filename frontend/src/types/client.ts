export type address = {
  number: number;
  street: string;
  city: string;
};

export type client = {
  _id: string;
  name: string;
  email: string;
  phone: number;
  address: address;
  cpf: string;
};


export type data = {
  name: string;
  email: string;
  phone: number;
  address: address;
  cpf: string;
};

export type fieldValues = {
  name: string;
  email: string;
  cpf: string;
  city: string;
  phone: number;
  number: number;
  street: string;
};
