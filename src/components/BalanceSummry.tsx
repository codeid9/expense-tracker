function BalanceSummry() {
    return (
        <>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 p-4 border-indigo-200 bg-indigo-50">
                    <h1 className="text-center font-semibold text-xl text-indigo-800">
                        Total Balance
                    </h1>
                    <span className="block text-center font-bold text-3xl">5000</span>
                </div>
                <div className="border-2 p-4 border-green-200 bg-green-50">
                    <h1 className="text-center font-semibold text-xl text-green-800">
                        Total Income
                    </h1>
                    <span className="block text-center font-bold text-3xl">7000</span>
                </div>
                <div className="border-2 p-4 border-red-200 bg-red-50">
                    <h1 className="text-center font-semibold text-xl text-red-800">
                        Total Expense
                    </h1>
                    <span className="block text-center font-bold text-3xl">2000</span>
                </div>
            </div>
        </>
    );
}

export default BalanceSummry;
