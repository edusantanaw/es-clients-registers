import { client } from "../../domain/entities/client";

export const validClient: client = {
  address: {
    number: 250,
    city: "any_cit",
    street: "any_street",
  },
  cpf: "123.123.123-10",
  email: "any_email@email.com",
  name: "any_name",
  phone: 123456789,
};
