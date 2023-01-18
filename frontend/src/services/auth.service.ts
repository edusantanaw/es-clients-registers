import { data, response } from "../types/auth";import { httpReponse } from "../types/httpReponse";
import Api from "../util/Api";
import { tokenKey } from "../util/keys";

const baseUrl = " http://localhost:5000/api/";

function saveIntoStorage(value: any, key: any) {
  localStorage.setItem(key, value);
}

export async function authService(data: data): Promise<httpReponse> {
  try {
    const response = (await Api.post(baseUrl + "auth", data)) as response;
    const { accessToken } = response.data;
    saveIntoStorage(accessToken, tokenKey);
    return { success: true, data: accessToken };
  } catch (error) {
    const authError = error as { response: { data: string } };
    return { success: false, data: authError.response.data };
  }
}
export async function signupService(data: data): Promise<httpReponse> {
  try {
    const response = (await Api.post(baseUrl + "signup", data)) as response;
    const { accessToken } = response.data;
    saveIntoStorage(accessToken, tokenKey);
    return { success: true, data: accessToken };
  } catch (error) {
    const authError = error as { response: { data: string } };
    return { success: false, data: authError.response.data };
  }
}
