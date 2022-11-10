import axios from "axios";
import { signupData } from "../typing";

// @ts-ignore
const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});


export const signupApi = (data: signupData) =>
api.post("/register", data);


export const getUserById = (id?: string | any) =>
  api.get(`hello?id=${id}`);


  
