import config from "@/config";
import { LoginType } from "@/types/login";
import { RegisterType } from "@/types/register";
import axios from "axios";

const login = async (data: LoginType) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);
  return response;
};
const register = async (data: RegisterType) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);
  return response;
};

export { login, register };
