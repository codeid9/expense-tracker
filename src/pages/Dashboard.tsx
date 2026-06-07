import { useTransactions } from "../context/TransactionContext";

import BalanceSummry from "../components/BalanceSummry";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
    const { transactions, addTransaction, deleteTransaction } =
        useTransactions();

    const totalIncome = transactions
        .filter((item) => item.type === "income")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = transactions
        .filter((item) => item.type === "expense")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalBalance = totalIncome - totalExpense;

    return (
        <div className="min-h-screen bg-slate-50/50 pb-12">
            {/* Top Cards Panel */}
            <BalanceSummry
                balance={totalBalance}
                income={totalIncome}
                expense={totalExpense}
            />

            {/* Main Balanced Content Area */}
            <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 items-start">
                <TransactionForm onAddTransaction={addTransaction} />
                <TransactionList
                    items={transactions}
                    onDeleteTransaction={deleteTransaction}
                />
            </main>
        </div>
    );
}
