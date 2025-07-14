import {Navigate} from "react-router-dom";

export default function ProtectedRRoute({children}){
    const token = localStorage.getItem("token");
    if(!token){
        return <Navigate to="/"/>;

    }
    return children;
}