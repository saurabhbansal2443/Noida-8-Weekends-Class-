import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {useDispatch } from 'react-redux';
import {addUser} from "./utils/Store/UserSlice";

import { userAPI } from "./constant";

const AuthWrapper = ({ children }) => {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [isLoading, setIsLoading] = useState(true);

  let dispatch = useDispatch();

  let auth = async () => {
    try {
      let resposnse = await axios.get(userAPI, { withCredentials: true });

      setIsAuthenticated(resposnse.data.result);
      if( resposnse.data.result == true  ) { // login is done 
         dispatch(addUser(resposnse.data.data));
      }
    } catch (err) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    auth();
  }, []);

  if (isLoading == true) {
    return <ShimmerUI></ShimmerUI>;
  } else {
    return isAuthenticated == true ? (
      children
    ) : (
      <Navigate to="/login"></Navigate>
    );
  }
};

export default AuthWrapper;
