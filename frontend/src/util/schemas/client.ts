import { cpf as cpfValidator } from "cpf-cnpj-validator";
import * as yup from "yup";

export const clientForm = yup.object().shape({
    name: yup.string().required("O nome é necessario!"),
    email: yup.string().required("O email é necessario!").email(),
    phone: yup
      .number().typeError("O telefone é necessario!")
      .required("O numero de telefone é necessario!"),
    cpf: yup
      .string()
      .required("O cpf é necessario!")
      .test("test-invalid-cpf", "cpf inválido", (cpf) =>
        cpfValidator.isValid(cpf as string)
      ),
    city: yup.string().required("A cidade é necessaria!"),
    number: yup.number().default(0).typeError("O numero é necessario!").required("O numero é neccesario!"),
    street: yup.string().required("A cidade é neccesaria!"),
  });