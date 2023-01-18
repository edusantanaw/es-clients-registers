import { FieldValues } from "react-hook-form";
import { createClient } from "../../../services/client.service";
import { fieldValues } from "../../../types/client";
import FormClient from "./Form";
import { Modal } from "./styles/ModalClient";

interface props {
  handleModal: () => void;
}


export const NewClientModal = ({ handleModal }: props) => {
  async function handleCreate(data: FieldValues) {
    const { city, street, number, ...rest } = data as fieldValues;
    const address = {
      city,
      street,
      number,
    };
    const response = await createClient({ address: address, ...rest });
    return response;
  }

  return (
    <Modal>
      <div className="close" onClick={handleModal}></div>
      <FormClient fn={handleCreate} modal={handleModal} />
    </Modal>
  );
};
