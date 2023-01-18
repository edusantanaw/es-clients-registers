import { useRef, useState } from "react";
import { usePaginate } from "../../hooks/usePaginate";
import { loadUser, searchUser } from "../../services/randomUser.service";
import { users } from "../../types/randomUser";
import UserList from "./components/UserList";
import { HomeContainer, Title } from "./home.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Search } from "./components/Search";
import { Loading } from "../../components/Loading";

const Home = () => {
  const { atualPage, isLoading, data, next, prev, setPageByIndex } =
    usePaginate(loadUser, "users");

  const [searchResults, setSearchResults] = useState<users[] | null>(null);

  async function handleSearch(target: string, types: string[]) {
      const data = await searchUser(target.toLowerCase(), types);
      setSearchResults(data);
    }

  if (isLoading) return <Loading />
  return (
    <HomeContainer>
      <div className="content">
        <Title>Usuarios</Title>
        <Search handleSearch={handleSearch}  />
        {data && <UserList list={!searchResults ? data : searchResults} />}
        {!searchResults && (
          <div className="current_page">
            <FaAngleLeft onClick={prev} id="left" />
            {Array(5)
              .fill("")
              .map((n, i) => (
                <span
                key={i}
                  id={atualPage === i + 1  ? "actual" : ""}
                  onClick={() => setPageByIndex(i + 1)}
                >
                  {i + 1}
                </span>
              ))}
            <FaAngleRight onClick={next} id="right" />
            {atualPage > 5 && <span id="actual">{atualPage}</span>}
          </div>
        )}
      </div>
    </HomeContainer>
  );
};

export default Home;
