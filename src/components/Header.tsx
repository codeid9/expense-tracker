function Header() {
    return (
        <div className="w-full h-20 flex justify-between items-center px-6 border-b-2 border-b-slate-300">
            <div className="text-3xl">
                <span className="text-orange-600 font-bold">Expense</span>{" "}
                Tracker
            </div>
            <button className="bg-orange-600 text-white px-6 py-2 cursor-pointer transition-transform active:scale-95 hover:shadow-md hover:shadow-slate-600">
                Login
            </button>
        </div>
    );
}

export default Header;
