import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

export default function History() {
    const { transactions, deleteTransaction } = useTransactions();

    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState<
        "all" | "income" | "expense"
    >("all");

    const filteredTransactions = transactions.filter((item) => {
        const matchesFilter =
            activeFilter === "all" || item.type === activeFilter;
        const matchesSearch = item.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Transaction History
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            View and manage all your past entries
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex gap-2 bg-gray-100 p-1 rounded-lg self-start">
                        {(["all", "income", "expense"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveFilter(type)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-all cursor-pointer ${
                                    activeFilter === type
                                        ? "bg-white text-gray-900 shadow-sm"
                                        : "text-gray-500 hover:text-gray-900"
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="Search transactions by title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* Transactions List / Table */}
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                    {filteredTransactions.length === 0 ? (
                        <div className="p-12 text-center text-gray-500 bg-gray-50">
                            <span className="text-2xl">🤷‍♂️</span>
                            <p className="mt-2 text-sm font-medium">
                                No matching transactions found.
                            </p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {filteredTransactions.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors group"
                                >
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-800">
                                            {item.title}
                                        </span>
                                        {item.description && (
                                            <span className="text-xs text-gray-400 mt-0.5">
                                                {item.description}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span
                                            className={`font-semibold text-sm ${
                                                item.type === "income"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {item.type === "income" ? "+" : "-"}
                                            ${item.amount}
                                        </span>

                                        {/* Delete button from Context */}
                                        <button
                                            onClick={() =>
                                                deleteTransaction(item.id)
                                            }
                                            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1 cursor-pointer"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
