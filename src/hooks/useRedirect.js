import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { suspend } from "suspend-react";
import useProtectedUser from './useProtectedUser'

 
 

const useRedirect = (page) => {
    let navigate = useNavigate();
    const decodedToken = suspend(useProtectedUser, [page])
    console.log({decodedToken})
    useEffect(() => {
    if(!decodedToken){
        navigate("/login", { replace: false });
    } 
    })
 }

 export default useRedirect