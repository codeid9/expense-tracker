import type { Transaction } from "../types";

interface TransactionListProps {
    items: Transaction[];
}

function TransactionList({ items }: TransactionListProps) {
    return (
        <div className="lg:col-span-2 border-2 bg-slate-50 border-slate-200 p-2">
            <h1 className="font-semibold text-center text-xl">
                Recent Transactions
            </h1>
            <ul className="flex flex-col pt-6 max-h-72 overflow-y-auto pr-1 space-y-3">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={`${item.type === "income" ? "bg-green-100 hover:bg-green-200 border-green-300" : "bg-red-100 hover:bg-red-200 border-red-300"} border p-2 flex justify-between`}
                    >
                        <span>{item.title}</span>
                        <span>
                            {item.type === "income" ? "+" : "-"}${item.amount}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
