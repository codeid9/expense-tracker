import { useState } from "react";
import type { Transaction } from "../types";

const CATEGORIES = [
    "Food",
    "Rent",
    "Salary",
    "Entertainment",
    "Utilities",
    "Other",
];

interface TransactionFormProps {
    onAddTransaction: (newTx: Omit<Transaction, "id">) => void;
}

function TransactionForm({ onAddTransaction }: TransactionFormProps) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<"income" | "expense">("income");
    const [category, setCategory] = useState("Other");
    const [description, setDescription] = useState("");

    function handleForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!title.trim()) {
            alert("Please enter a valid transaction title!");
            return;
        }

        const parsedAmount = Number(amount);
        if (!amount || parsedAmount <= 0 || isNaN(parsedAmount)) {
            alert("Please enter a valid amount greater than 0");
            return;
        }

        onAddTransaction({
            title: title.trim(),
            amount: parsedAmount,
            type,
            category,
            description: description.trim(),
        });

        setTitle("");
        setAmount("");
        setCategory("Other");
        setDescription("");
    }

    return (
        <div className="lg:col-span-1 border-2 border-orange-200 bg-orange-50 p-4 rounded-xl shadow-sm">
            <h1 className="font-semibold text-orange-600 text-center text-xl">
                Manage Transactions
            </h1>
            <form
                className="flex flex-col pt-6 pb-2 space-y-3"
                onSubmit={handleForm}
            >
                {/* Title Input */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title: (e.g., Netflix, Salary, Burger)"
                    className="p-2 bg-orange-100 rounded-lg border border-orange-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />

                {/* Amount Input */}
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount: (e.g., 500, 10)"
                    className="p-2 bg-orange-100 rounded-lg border border-orange-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />

                {/* Type Selection */}
                <select
                    value={type}
                    onChange={(e) =>
                        setType(e.target.value as "income" | "expense")
                    }
                    className="bg-orange-100 p-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-700 cursor-pointer"
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                {/* NEW: Category Dropdown */}
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-orange-100 p-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-700 cursor-pointer"
                >
                    {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Description Input */}
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a note (optional)..."
                    className="p-2 placeholder:text-gray-500 bg-orange-100 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm h-20 resize-none"
                ></textarea>

                <button
                    type="submit"
                    className="btn-orange mt-2 font-medium transition-transform active:scale-95 cursor-pointer"
                >
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;
