import { client, data } from "../types/client";
import { httpReponse } from "../types/httpReponse";
import Api from "../util/Api";
import { tokenKey } from "../util/keys";

const baseUrl = "http://localhost:5000/api/";

function getToken(): string | null {
  const token = localStorage.getItem(tokenKey);
  return token;
}

function makeHeaders() {
  const token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export async function loadAllClient(): Promise<client[] | null> {
  const options = makeHeaders();
  const response = await Api.get(baseUrl + "clients", options);
  if (response.data) return response.data as client[];
  return null;
}


export async function createClient(data: data): Promise<httpReponse> {
  try {
    const options = makeHeaders();
    await Api.post(baseUrl + "client", data, options);
    return { success: true, data: "" };
  } catch (error) {
    const data = error as { response: { data: string } };
    return { success: false, data: data.response.data };
  }
}

type updateData = { id: string; data: data };

export async function updateClient({
  data,
  id,
}: updateData): Promise<httpReponse> {
  try {
    const options = makeHeaders();
    await Api.put(baseUrl + `client/${id}`, data, options);
    return { success: true, data: "" };
  } catch (error) {
    const data = error as { response: { data: string } };
    return { success: false, data: data.response.data };
  }
}

export async function deleteClient(id: string): Promise<string> {
  const options = makeHeaders();
  const response = await Api.delete(`${baseUrl}client/${id}`, options);
  return response.data;
}
