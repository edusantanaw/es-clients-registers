import React, { useRef, useState } from "react";
import { Input, SearchContainer } from "./search.style";
import { FaAngleDown } from "react-icons/fa";

interface props {
  handleSearch: (target: string, types: string[]) => Promise<void>;
}
const typeFilters = ["todos", "name", "email", "username"];

export const Search = ({ handleSearch }: props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filter, setFilter] = useState<string[]>(["name", "email", "username"]);
  const [currentFilter, setCurrentFilter] = useState<string>("todos");
  const [filterDropDown, setFilterDropDown] = useState(false);


  async function search() {
    if (inputRef.current) {
      const target = inputRef.current.value;
      await handleSearch(target, filter);
    }
  }

  function addFilter(type: string) {
    setCurrentFilter(type);
    type === "todos"
      ? setFilter(["name", "email", "username"])
      : setFilter([type]);
    setFilterDropDown(false);
  }

  return (
    <SearchContainer>
      <Input
        type="text"
        ref={inputRef}
        placeholder="pesquisar"
        onChange={search}
      />
      <div className="filter">
        <div
          onClick={() =>
            filterDropDown ? setFilterDropDown(false) : setFilterDropDown(true)
          }
          className="current_filter"
        >
          filtrar por: {currentFilter} <FaAngleDown />
        </div>
       { filterDropDown && <div className="filters">
          {typeFilters.map((type, i) => (
            <span key={i} onClick={() => addFilter(type)}>
              {type}
            </span>
          ))}
        </div>}
      </div>
    </SearchContainer>
  );
};
