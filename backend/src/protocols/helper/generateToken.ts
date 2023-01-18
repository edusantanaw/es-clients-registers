export interface generateToken {
  generate: (username: string) => Promise<string>;
}
