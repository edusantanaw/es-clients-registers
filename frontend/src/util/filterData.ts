import { filterData, filters, fiterParams } from "../types/filterData";
import { users } from "../types/randomUser";

export async function filterData({
  data,
  target,
  types,
}: filterData): Promise<users[]> {
  const currentFilters: users[] = [];

  for (let index in types) {
    const typeFilter = typeFilters[types[index]];

    const filteredData = filter({
      method: typeFilter,
      users: data,
      target,
      current: currentFilters,
    });

    currentFilters.push(...filteredData);
  }

  return currentFilters;
}

const typeFilters: filters = {
  name: (user: users) => user.name.first.toLowerCase(),
  email: (user: users) => user.email.toLowerCase(),
  username: (user: users) => user.login.username.toLowerCase(),
};

function filter({ current, method, target, users }: fiterParams) {
  const dataFiltered = users.filter(
    (user) => method(user).startsWith(target) && !current.includes(user)
  );
  return dataFiltered;
}
