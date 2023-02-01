export const BASE_URL = "http://localhost:8000/"; //json url;
export const API_URL = "http://localhost:8080/api/"; 

export default {
  default: {
    // login
    baseUrl: BASE_URL,
    allUsers: BASE_URL + "users",
    createUser: API_URL + "register",
    getAllRegisteredUser: BASE_URL + "register",
  },
};
