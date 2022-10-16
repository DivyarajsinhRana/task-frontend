import { useState } from "react";

const useToken = () => {
  let jwtToken = localStorage.getItem('token');
  const [token, setToken] = useState(jwtToken);
  // console.log('token in hook',token);
  return {  
  setToken,
  token
  };
};
export default useToken;