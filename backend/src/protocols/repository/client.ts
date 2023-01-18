import { client } from "../../domain/entities/client";

export type dataUpdate = {
  id: string;
  data: client;
};

export interface clientRepository {
  loadByEmail: (email: string) => Promise<client | null>;
  create: (data: client) => Promise<client>;
  loadAll: () => Promise<client[]>;
  loadById: (id: string) => Promise<client | null>;
  update: (data: dataUpdate) => Promise<client>;
  delete: (id: string) => Promise<void>;
}
