import axios from "axios";
import config from "../../../config/config";

export const getAllUsers = () => {
    return axios.get(`${config.default.allUsers}`);
  };