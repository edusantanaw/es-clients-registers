import { client } from "../../../types/client";
import { ClientContainer, ClientList } from "./styles/client.style";
import { AiOutlineEye } from "react-icons/ai";

interface props {
  handleClient: (client: client) => void;
  data: client[] | null;
}

const Clients = ({ handleClient, data }: props) => {
  return (
    <ClientContainer>
      <ClientList>
        {data ? (
          data.map((client, i) => (
            <li
              className="clients"
              key={i}
            >
              <span>{client.name}</span>
              <span>{client.phone}</span>
              <span>{client.address.city}</span>
              <span id="eye" onClick={() => handleClient(client)}>
                <AiOutlineEye /> infos
              </span>
            </li>
          ))
        ) : (
          <span>Nenhum cliente encontrado!</span>
        )}
      </ClientList>
    </ClientContainer>
  );
};

export default Clients;
