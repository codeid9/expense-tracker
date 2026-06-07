import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md w-96 text-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Welcome Back
                </h2>

                <button
                    onClick={handleLogin}
                    className="bg-orange-600 text-white font-medium py-2 px-4 rounded-lg w-full hover:bg-orange-700 transition-all cursor-pointer"
                >
                    Login to Dashboard
                </button>
            </div>
        </div>
    );
}
