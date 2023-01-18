import { Input, Label, Form } from "./styles/ModalClient";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientForm } from "../../../util/schemas/client";
import { client } from "../../../types/client";
import { useState } from "react";

interface props {
  client?: client | null;
  fn: (data: FieldValues) => Promise<{ success: boolean; data: string }>;
  modal: () => void;
}

const FormClient = ({ client, fn, modal }: props) => {
  const [errorHandle, setErrorHandle] = useState<string | null>(null);

  async function handle(data: FieldValues) {
    const response = await fn(data);
    if (!response.success) {
      setErrorHandle(response.data);
      return;
    }
    modal();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(clientForm) });
  return (
    <Form
      onSubmit={handleSubmit(handle)}
      onKeyPress={(e) => e.key === "Enter" && handleSubmit(handle)}
    >
      <div className="column">
        <Label>Nome</Label>
        <Input
          defaultValue={client?.name}
          type="text"
          placeholder="Digite o nome"
          {...register("name")}
        />
        <p className="error">{errors?.name && <>{errors.name.message} </>}</p>
      </div>
      <div className="column">
        <Label>Email</Label>
        <Input
          type="email"
          defaultValue={client?.email}
          placeholder="Digite o email"
          {...register("email")}
        />
        <p className="error">{errors?.email && <>{errors.email.message} </>}</p>
      </div>
      <div className="column">
        <Label>Telefone</Label>
        <Input
          defaultValue={client?.phone}
          type="number"
          placeholder="Digite o telefone"
          {...register("phone")}
        />
        <p className="error">{errors?.phone && <>{errors.phone.message} </>}</p>
      </div>
      <div className="column">
        <Label>Cpf</Label>
        <Input
          defaultValue={client?.cpf}
          type="text"
          placeholder="Digite o cpf"
          {...register("cpf")}
        />
        <p className="error">{errors?.cpf && <>{errors.cpf.message} </>}</p>
      </div>
      <div className="column">
        <Label>Rua</Label>
        <Input
          defaultValue={client?.address.street}
          type="text"
          placeholder="Digite a rua"
          {...register("street")}
        />
        <p className="error">
          {errors?.street && <>{errors.street.message} </>}
        </p>
      </div>
      <div className="row">
        <div className="column">
          <Label>Cidade</Label>
          <Input
            defaultValue={client?.address.city}
            type="text"
            placeholder="Digite a cidade"
            {...register("city")}
          />
          <p className="error">{errors?.city && <>{errors.city.message} </>}</p>
        </div>
        <div className="column">
          <Label>Numero</Label>
          <Input
            defaultValue={client?.address.number}
            type="number"
            placeholder="Digite o numero"
            {...register("number")}
          />
          <p className="error">
            {errors?.number && <>{errors.number.message} </>}
          </p>
        </div>
      </div>
      <p className="error">{errorHandle && <>{errorHandle} </>}</p>
      <input type="submit" />
    </Form>
  );
};

export default FormClient;
