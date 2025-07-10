import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://lexiconapi.onrender.com/Api/Client',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface RegisterForm {
  username: string;
  password: string;
  confirm_password: string;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface Word {
  id: string;
  national: string;
  foreign: string;
}

export interface EditWordForm {
  id: string;
  national: string;
  foreign: string;
}
export interface EditWordBody {
  national: string;
  foreign: string;
}

export interface AddWordBody {
  national: string;
  foreign: string;
}

export function registerUser(data: RegisterForm) {
  return apiClient.post('/Register', data);
}

export function loginUser(data: LoginForm) {
  return apiClient.post<{ token: string }>('/Login', data);
}

export function fetchAllWords() {
  return apiClient.get<Word[]>('/GetAllWords');
}

export function editWord(id: string, body: EditWordBody) {
  return apiClient.put(`/EditWord/${id}`, body);
}

export function addWord(data: AddWordBody) {
  return apiClient.post('/AddWord', data);
}

export function deleteWord(id: string) {
  return apiClient.delete(`/DeleteWord/${id}`);
}

export default apiClient;
