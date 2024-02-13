import React, { useState, useEffect } from "react";
//import the routes and navigate component
import { Navigate } from "react-router-dom";
//import getAuth function from util/auth
import getAuth from "../../../util/auth";
const PrivateAuthRoute = ({ roles, children }) => {
    // const Navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
        // Retrieve the logged in user from local storage
        const loggedInEmployee = getAuth();
        // console.log(loggedInEmployee);
        loggedInEmployee.then((response) => {
          if (response.employee_token) {
            // If in here, that means the user is logged in 
            // console.log(response);
            // console.log("Set logged in to true");
            setIsLogged(true);
            if (roles && roles.length > 0 && roles.includes(response.employee_role)) {
              // If in here, that means the user is logged and has  authorization to access the route 
              // console.log("Set authorized to true");
              setIsAuthorized(true);
            }
          }
          setIsChecked(true);
        });
      }, [roles]);
      if (isChecked) {
        if (!isLogged) {
          return <Navigate to="/login" />;
        }
        if (!isAuthorized) {
          return <Navigate to="/unauthorized" />;
        }
      }
    
      return children;
};
export default PrivateAuthRoute