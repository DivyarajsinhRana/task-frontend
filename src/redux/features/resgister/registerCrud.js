import axios from "axios";
import config from "../../../config/config";

export const registerUser = (payload) => {
    return axios.post(`${config.default.createUser}`,payload);
  };
export const registeredUsersList = () => {
    return axios.get(`${config.default.createUser}`);
  };