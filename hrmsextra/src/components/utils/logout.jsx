import { useNavigate } from "react-router-dom";
export default function LogoutButton() {
    const navigate= useNavigate();
    const handleLogout= () => {
        localStorage.removeItem("token");
        localStorage.removeItem('user');
        navigate("/");
    };
    return(
        <button
        type="button"
        
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded-2xl">
            logout
        </button>
    )
}