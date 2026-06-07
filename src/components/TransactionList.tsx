import type { Transaction } from "../types";

interface TransactionListProps {
    items: Transaction[];
    onDeleteTransaction: (id: string) => void;
}

function TransactionList({ items, onDeleteTransaction }: TransactionListProps) {
    return (
        <div className="lg:col-span-2 border border-slate-200 bg-white p-5 rounded-2xl shadow-sm flex flex-col">
            <h1 className="font-bold text-left text-lg text-slate-800 tracking-tight mb-2">
                Recent Transactions
            </h1>

            <ul className="flex flex-col pt-4 max-h-96 overflow-y-auto pr-2 space-y-3 scrollbar-thin">
                {items.length === 0 ? (
                    /* Enhanced Empty State Box */
                    <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 text-center">
                        <span className="text-4xl mb-3 animate-pulse">💸</span>
                        <p className="text-sm font-semibold text-slate-600">
                            No transactions recorded yet
                        </p>
                        <p className="text-xs text-slate-400 mt-1 max-w-60">
                            Add your first income or expense from the panel to
                            track your funds.
                        </p>
                    </div>
                ) : (
                    items.map((item) => (
                        <li
                            key={item.id}
                            className={`shrink-0 bg-white border border-slate-100 p-3.5 flex justify-between items-center rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group relative overflow-hidden pl-5 border-l-4 ${
                                item.type === "income"
                                    ? "border-l-emerald-500 hover:border-l-emerald-600"
                                    : "border-l-rose-500 hover:border-l-rose-600"
                            }`}
                        >
                            <div className="flex flex-col text-left space-y-1.5">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-semibold text-slate-800 text-sm capitalize">
                                        {item.title}
                                    </span>
                                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md uppercase tracking-wider scale-95 origin-left">
                                        {item.category || "Other"}
                                    </span>
                                </div>

                                {item.description && (
                                    <p className="text-xs text-slate-400 italic font-medium capitalize">
                                        {item.description}
                                    </p>
                                )}
                            </div>

                            {/* Right Side: Amount and Delete Button */}
                            <div className="flex items-center gap-3">
                                <span
                                    className={`font-bold text-sm tracking-tight ${
                                        item.type === "income"
                                            ? "text-emerald-600"
                                            : "text-rose-600"
                                    }`}
                                >
                                    {item.type === "income" ? "+" : "-"}$
                                    {item.amount.toLocaleString()}
                                </span>

                                <button
                                    onClick={() => onDeleteTransaction(item.id)}
                                    className="text-slate-400 hover:text-rose-500  transition-all duration-200 p-1.5 hover:bg-rose-50 rounded-lg cursor-pointer"
                                    title="Delete Transaction"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TransactionList;
