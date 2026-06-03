function TransactionForm() {
    return (
        <div className="lg:col-span-1 border-2 border-orange-200 bg-orange-50 p-2">
            <h1 className="font-semibold text-orange-600 text-center text-xl">
                Manage Transactions
            </h1>
            <form className="flex flex-col pt-6 space-y-3">
                <input
                    type="text"
                    placeholder="Title:(e.g., Netflix, Salary, Burger)"
                    className="p-2 bg-orange-200 border border-orange-300 placeholder:text-gray-800"
                />
                <input
                    type="number"
                    placeholder="Amount:(e.g., 500, 10)"
                    className="p-2 bg-orange-200 border border-orange-300 placeholder:text-gray-800"
                />
                <select name="" id="" className="bg-orange-200 p-2 border border-orange-300">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <textarea placeholder="Add a note (optional)..." className="bg-orange-200 focus:ring-2 focus:ring-orange-500"></textarea>
                <button type="submit" className="bg-orange-600 py-2 text-white cursor-pointer">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;
