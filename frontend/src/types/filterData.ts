import { users } from "./randomUser";

export type fiterParams = {
  method: (user: users) => string;
  users: users[];
  target: string;
  current: users[];
};

export type filters = {
  [index: string]: (user: users) => string;
};

export type getData = { types: string[]; data: users[]; target: string };

export type filterData = { data: users[]; target: string; types: string[] };