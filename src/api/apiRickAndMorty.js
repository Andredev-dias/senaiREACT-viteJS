import axios from "axios"

export const apiRMCaracters = axios.create({
  baseURL: "https://rickandmortyapi.com/api"
})