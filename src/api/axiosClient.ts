import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://lexiconapi.onrender.com/Api/Client",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});