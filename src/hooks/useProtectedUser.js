import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate  } from "react-router-dom";




const useProtectedUser = async () => {
  let navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  console.log('token',token)

 
    await fetch("https://sheltered-bastion-98583.herokuapp.com/protected", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log({data});

        if (!data.user) {
          console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
          navigate("/login", { replace: false });
          
          
        }
      });
  
  return token;
};


 
export default useProtectedUser;
