import { useState } from "react";
import { client } from "../../../types/client";
import { DetailsContainer } from "./styles/details.styles";
import { AiOutlineClose } from "react-icons/ai";

interface props {
  client: client;
  handleModal: () => void;
  showInfo: () => void;
  handleDeleteClient: (id: string | undefined) => void
}

const Details = ({ client, handleModal, handleDeleteClient, showInfo }: props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <DetailsContainer>
        <div className="close" onClick={showInfo}></div>
        <div className="infos">
          <AiOutlineClose onClick={showInfo} id="icon_close" />
          {showDeleteModal && (
            <div className="delete_modal">
              <p>Realmente deseja remover esse cliente?</p>
              <div className="choose_buttons">
                <button id="delete" onClick={()=>handleDeleteClient(client._id)}>Sim</button>
                <button onClick={() => setShowDeleteModal(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          )}
          <div className="details">
            <div className="left">
              <div className="credential">
                <span>Nome</span>
                <p>{client.name}</p>
              </div>
              <div className="credential">
                <span>Email</span>
                <p>{client.email}</p>
              </div>
              <div className="credential">
                <span>Cpf</span>
                <p>{client.cpf}</p>
              </div>
              <div className="credential">
                <span>Id</span>
                <p>{client._id}</p>
              </div>
            </div>
            <div className="right">
              <div className="credential">
                <span>Cidade</span>
                <p>{client.address.city}</p>
              </div>
              <div className="credential">
                <span>Rua</span>
                <p>{client.address.street}</p>
              </div>
              <div className="credential">
                <span>Numero</span>
                <p>{client.address.number}</p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button id="update" onClick={handleModal}>
              Atualizar
            </button>
            <button id="delete" onClick={() => setShowDeleteModal(true)}>
              Deletar
            </button>
          </div>
        </div>
      </DetailsContainer>
    </>
  );
};

export default Details;
