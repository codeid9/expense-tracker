import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                    FinTrack
                </h1>
            </div>

            <nav className="flex items-center gap-1 sm:gap-2">
                <Link
                    to="/dashboard"
                    className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all"
                >
                    Dashboard
                </Link>
                <Link
                    to="/analytics"
                    className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all"
                >
                    Analytics
                </Link>
                <Link
                    to="/history"
                    className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all"
                >
                    History
                </Link>
            </nav>

            <button
                onClick={handleLogout}
                className="text-sm font-medium text-gray-500 hover:text-red-600 border border-gray-300 hover:border-red-200 px-3 py-1.5 rounded-md hover:bg-red-50 transition-all cursor-pointer"
            >
                Logout
            </button>
        </header>
    );
}
