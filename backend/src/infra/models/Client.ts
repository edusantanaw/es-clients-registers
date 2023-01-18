import { Schema, model } from "mongoose";

export default () => {
  const Client = model(
    "Client",
    new Schema({
      name: {
        required: true,
        type: String,
      },
      email: {
        required: true,
        type: String,
      },
      cpf: {
        required: true,
        type: String,
      },
      phone: {
        required: true,
        type: Number,
      },
      address: {
        street: {
          required: true,
          type: String,
        },
        number: {
          required: true,
          type: Number,
        },
        city: {
          required: true,
          type: String,
        },
      },
      createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
      updatedAt: {
        type: Date,
        default: () => Date.now(),
      },
      deletedAt: {
        date: {
          type: Date,
        },
        deleted: {
          type: Boolean,
          default: false,
        },
      },
    })
  );
  return Client;
};
