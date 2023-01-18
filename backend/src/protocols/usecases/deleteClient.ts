export interface deleteClientUsecase {
    delete: (id: string) => Promise<boolean>;
  }