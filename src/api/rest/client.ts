import type {
  AddWordBody,
  EditWordBody,
  LoginForm,
  RegisterForm,
} from "../model/payloadInterfaces";
import type { Word } from "../model/responseInterfaces";
import { apiClient } from "../axiosClient";





export function registerUser(data: RegisterForm) {
  return apiClient.post("/Register", data);
}

export function loginUser(data: LoginForm) {
  return apiClient.post<{ token: string }>("/Login", data);
}

export function fetchAllWords() {
  return apiClient.get<Word[]>("/GetAllWords");
}

export function editWord(id: string, body: EditWordBody) {
  return apiClient.put(`/EditWord/${id}`, body);
}

export function addWord(data: AddWordBody) {
  return apiClient.post("/AddWord", data);
}

export function deleteWord(id: string) {
  return apiClient.delete(`/DeleteWord/${id}`);
}

export default apiClient;
