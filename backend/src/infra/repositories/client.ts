import { client } from "../../domain/entities/client";
import {
  clientRepository,
  dataUpdate,
} from "../../protocols/repository/client";
import Client from "../models/Client";

const client = Client();

export class ClientRepository implements clientRepository {
  async create(data: client) {
    const newClient = await client.create(data);
    await newClient.save();
    return newClient as client;
  }

  async loadById(id: string) {
    const clientReponse = (await client.findById(id)) as client | null;
    return clientReponse;
  }

  async loadByEmail(email: string) {
    const clientReponse = (await client.findOne({
      email: email,
    })) as client | null;
    return clientReponse;
  }

  async loadAll() {
    const clientReponse = (await client.find({
      deletedAt: { deleted: false },
    })) as client[];
    return clientReponse;
  }

  async update({ data, id }: dataUpdate) {
    const updateClient = await client.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          address: data.address,
          name: data.name,
          cpf: data.cpf,
          email: data.email,
          phone: data.phone,
        },
      },
      {
        new: true,
      }
    );
    return updateClient as client;
  }
  async delete(id: string) {
    await client.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          deletedAt: {
            deleted: true,
            date: Date.now(),
          },
        },
      },
      { new: true }
    );
    return;
  }
}
