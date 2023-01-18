import { client } from "../../domain/entities/client";

export interface loadClientUsecase {
  loadAll: () => Promise<client[] | null>;
  loadById: (id: string) => Promise<client | null>;
}
