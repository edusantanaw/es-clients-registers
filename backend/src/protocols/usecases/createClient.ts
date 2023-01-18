import { client } from "../../domain/entities/client";

export interface createClientUsecase {
  create: (data: client) => Promise<client>;
}
