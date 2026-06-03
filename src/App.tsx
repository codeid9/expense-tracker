import Header from "./components/Header";
import BalanceSummry from "./components/BalanceSummry";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import type { Transaction } from "./types";
import { useState } from "react";
import Footer from "./components/Footer";

const tlist: Transaction[] = [
    {
        id: "1",
        title: "Netflix Subscription",
        amount: 15,
        type: "expense",
    },
    {
        id: "2",
        title: "Cashback Reward",
        amount: 2,
        type: "income",
    },
    {
        id: "3",
        title: "Burger & Fries (McDonalds)",
        amount: 10,
        type: "expense",
    },
    {
        id: "4",
        title: "Freelance Web Design Projec",
        amount: 200,
        type: "income",
    },
    {
        id: "5",
        title: "Petrol / Uber Ride",
        amount: 20,
        type: "expense",
    },
];

function App() {
    const [transactions, setTransactions] = useState<Transaction[]>(tlist);
    return (
        <div className="min-h-screen">
            <Header />
            <BalanceSummry />
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
                <TransactionForm />
                <TransactionList items={transactions} />
            </main>
            <Footer/>
        </div>
    );
}

export default App;
