import { apiResponse, users } from "../types/randomUser";
import Api from "../util/Api";
import { filterData } from "../util/filterData";

const baseUrl = "https://randomuser.me/api/?results=10&'";
const searchQuery = "https://randomuser.me/api/?results=600";

export async function loadUser(page: number): Promise<users[]> {
  const response = (await Api.get(`${baseUrl}page=${page}`)) as apiResponse;
  return response.data.results;
}

const cache = makeCache("users");

export async function searchUser(
  target: string,
  types: string[]
): Promise<users[] | null> {
  const data = await cache();
  if (target.length === 0) return null;
  const filteredData = await filterData({ data, target, types });
  return filteredData;
}

interface cache {
  [index: string]: users[];
}

function makeCache(key: string): () => Promise<users[]> {
  const cache: cache = {};

  return async () => {
    if (cache[key]) {
      return cache[key];
    }
    const data = (await Api.get(searchQuery)) as apiResponse;
    cache[key] = data.data.results;
    return cache[key];
  };
}
