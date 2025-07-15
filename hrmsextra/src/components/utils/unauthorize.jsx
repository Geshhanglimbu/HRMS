import{FaLock} from "react-icons/fa";
export default function Unauthorize() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-red-600 text-xl space-y-4">
        <FaLock className="text-6xl" />
        <p>You do not have permission to access this page.</p>
        </div>
    );
    }