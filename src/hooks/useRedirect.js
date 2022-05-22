import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { suspend } from "suspend-react";
import useProtectedUser from './useProtectedUser'

 
 

const useRedirect = (page) => {
    let navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    
    const {decodedToken }= suspend(async () => {
       
        console.log('redux toks......................................................',token)
          let res = await fetch("https://sheltered-bastion-98583.herokuapp.com/protected", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          })
          return await res.json()
      }, [page])
    console.log({decodedToken})
    useEffect(() => {
    if(decodedToken == ''){
        navigate("/login", { replace: false });
    } 
    })
 }

 export default useRedirect