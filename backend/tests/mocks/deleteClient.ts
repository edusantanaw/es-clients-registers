export class DeleteClientUsecaseSpy {
    clientExists = false;
    async delete(id: string) {
      if (!this.clientExists) throw "Cliente não existe!";
      return true
    }
  }
  