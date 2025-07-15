import {Navigate} from "react-router-dom";
import Unauthorize from "./unauthorize";

export default function ProtectedRRoute({children, allowedRoles=[]}){
    const token = localStorage.getItem("token");

    const userRaw = localStorage.getItem("user");
    const user = userRaw ? JSON.parse(userRaw) : null;
   
   if (!token || !user) {
    return <Navigate to="/"/>;
}

    if(allowedRoles.length > 0 && !allowedRoles.includes(user.role)){
        return < Unauthorize/>;
    }
    return children;
}