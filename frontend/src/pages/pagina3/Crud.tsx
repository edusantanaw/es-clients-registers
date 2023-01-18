import { useState } from "react";
import { Loading } from "../../components/Loading";
import { useApi } from "../../hooks/useApi";
import { deleteClient, loadAllClient } from "../../services/client.service";
import { client } from "../../types/client";
import Clients from "./components/Clients";
import Details from "./components/Details";
import { NewClientModal } from "./components/NewClientModal";
import Update from "./components/UpdateClient";
import { Button, CrudContainer } from "./crud.styles";

const Crud = () => {
  const [newClient, setNewClient] = useState(false);
  const [updateClient, setUpdateClient] = useState(false);
  const [currentClient, setCurrentClient] = useState<client | null>(null);
  const [showInfos, setShowInfos] = useState(false);

  const { data, isError, isLoading } = useApi({
    key: "clients",
    fetching: loadAllClient,
    dependeces: [showInfos, newClient, updateClient],
  });

  function handleNewClient() {
    newClient ? setNewClient(false) : setNewClient(true);
  }

  function showInfo() {
    showInfos ? setShowInfos(false) : setShowInfos(true);
  }

  function handleCurrentClient(client: client) {
    setCurrentClient(client);
    showInfo();
  }

  function handleUpdateClientModal() {
    updateClient ? setUpdateClient(false) : setUpdateClient(true);
    setShowInfos(false);
  }

  async function handleDeleteClient(id: string | undefined) {
    if (id) deleteClient(id);
    showInfo();
  }

  if (isLoading) return <Loading />;

  return (
    <CrudContainer>
      {newClient && <NewClientModal handleModal={handleNewClient} />}
      {updateClient && currentClient && (
        <Update
          currentClient={currentClient}
          handleModal={handleUpdateClientModal}
        />
      )}
      <div className="header">
        <h2>Listagem de clientes</h2>
        <Button onClick={handleNewClient}>Novo cliente</Button>
      </div>
      <div className="content">
        <Clients
          data={data as client[] | null}
          handleClient={handleCurrentClient}
        />
        {currentClient && showInfos && (
          <Details
            handleDeleteClient={handleDeleteClient}
            handleModal={handleUpdateClientModal}
            client={currentClient}
            showInfo={showInfo}
          />
        )}
      </div>
    </CrudContainer>
  );
};

export default Crud;
