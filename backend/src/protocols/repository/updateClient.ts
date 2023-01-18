import { client } from "../../domain/entities/client";

export interface updateClientUsecase {
  update: (data: { data: client; id: string }) => Promise<client>;
}
