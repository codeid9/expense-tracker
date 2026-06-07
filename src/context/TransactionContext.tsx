import React, { createContext, useContext, useState, useEffect } from "react";
import type { Transaction } from "../types";

interface TransactionContextType {
    transactions: Transaction[];
    addTransaction: (newTx: Omit<Transaction, "id">) => void;
    deleteTransaction: (id: string) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
    undefined,
);

export function TransactionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [transactions, setTransactions] = useState<Transaction[]>(() => {
        const localData = localStorage.getItem("transactions");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    const addTransaction = (newTx: Omit<Transaction, "id">) => {
        const finalTransaction: Transaction = {
            ...newTx,
            id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        };
        setTransactions([finalTransaction, ...transactions]);
    };

    const deleteTransaction = (id: string) => {
        setTransactions(transactions.filter((item) => item.id !== id));
    };

    return (
        <TransactionContext.Provider
            value={{ transactions, addTransaction, deleteTransaction }}
        >
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionContext);
    if (!context) {
        throw new Error(
            "useTransactions must be used within a TransactionProvider",
        );
    }
    return context;
}
