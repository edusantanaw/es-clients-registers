import React from "react";
import { FieldValues } from "react-hook-form";
import { updateClient } from "../../../services/client.service";
import { data, fieldValues } from "../../../types/client";
import { client } from "../../../types/client";
import FormClient from "./Form";
import { Modal } from "./styles/ModalClient";

interface props {
  handleModal: () => void;
  currentClient: client;
}

const Update = ({ handleModal, currentClient }: props) => {
  async function handleUpdate(data: FieldValues) {
    const { city, street, number, ...rest } = data as fieldValues;
    const address = {
      city,
      street,
      number,
    };
    const client = updateClient({
      data: { ...rest, address },
      id: currentClient._id,
    });
    return client;
  }

  return (
    <Modal>
      <div className="close" onClick={handleModal}></div>
      <FormClient client={currentClient}  modal={handleModal} fn={handleUpdate} />
    </Modal>
  );
};

export default Update;
