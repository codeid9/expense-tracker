import React, { useEffect } from "react";
import { useTransactions } from "../context/TransactionContext";
import { GoogleGenAI } from "@google/genai";

let cachedAIAdvice = "";

export default function Analytics() {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
    const [aiAdvice, setAiAdvice] = React.useState<string>(
        "Analyzing your financial data...",
    );
    const { transactions } = useTransactions();
    const [loadingAi, setLoadingAi] = React.useState<boolean>(true);

    useEffect(() => {
        async function fetchAIAdvice() {
            if (transactions.length === 0) return;
            if (cachedAIAdvice) {
                setAiAdvice(cachedAIAdvice);
                setLoadingAi(false);
                return;
            }
            try {
                setLoadingAi(true);
                const response = await ai.models.generateContent({
                    model: "gemini-2.5-flash",
                    contents: `You are a professional financial advisor. Here is the user's data: 
        Total Income: $${totalIncome}, Total Expense: $${totalExpense}, Current Savings: $${totalSavings}. 
        Breakdown by Category: ${JSON.stringify(categoryTotals)}.
        Please give a short, powerful, 2-line financial advice based on this data. Address the user as Abhay.`,
                });

                if (response.text) {
                    cachedAIAdvice = response.text;
                    setAiAdvice(response.text);
                }
            } catch (error: any) {
                console.error("AI Error:", error);
                setAiAdvice(
                    "Rate limit active. Please wait a minute or check your internet connection.",
                );
            } finally {
                setLoadingAi(false);
            }
        }

        fetchAIAdvice();
    }, []);

    const categoryTotals: { [key: string]: number } = {};

    transactions
        .filter((item) => item.type === "expense")
        .forEach((item) => {
            categoryTotals[item.category] =
                (categoryTotals[item.category] || 0) + item.amount;
        });
    const totalIncome = transactions
        .filter((item) => item.type === "income")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = transactions
        .filter((item) => item.type === "expense")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalSavings = totalIncome - totalExpense;

    const expensePercentage =
        totalIncome > 0
            ? Math.min(Math.round((totalExpense / totalIncome) * 100), 100)
            : 0;
    const savingsPercentage =
        totalIncome > 0
            ? Math.max(Math.round((totalSavings / totalIncome) * 100), 0)
            : 0;

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Analytics & Insights
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Visual breakdown of your financial health
                    </p>
                </div>

                {transactions.length === 0 ? (
                    <div className="p-12 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <span className="text-2xl">📊</span>
                        <p className="mt-2 text-sm font-medium">
                            Not enough data to generate analytics.
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Add some income and expenses to see the magic!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                                <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
                                    Total Inflow
                                </span>
                                <p className="text-2xl font-bold text-green-900 mt-1">
                                    ${totalIncome}
                                </p>
                            </div>
                            <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                                <span className="text-xs font-semibold text-red-700 uppercase tracking-wider">
                                    Total Outflow
                                </span>
                                <p className="text-2xl font-bold text-red-900 mt-1">
                                    ${totalExpense}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 border-t border-gray-100 pt-6">
                            {/* Expense Bar */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                        🔴 Burn Rate{" "}
                                        <span className="text-xs text-gray-400">
                                            (How much you spent)
                                        </span>
                                    </span>
                                    <span className="text-sm font-semibold text-red-600">
                                        {expensePercentage}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <div
                                        className="bg-red-500 h-3 rounded-full transition-all duration-500 ease-out"
                                        style={{
                                            width: `${expensePercentage}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Savings Bar */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                        🟢 Savings Rate{" "}
                                        <span className="text-xs text-gray-400">
                                            (How much you kept)
                                        </span>
                                    </span>
                                    <span className="text-sm font-semibold text-green-600">
                                        {savingsPercentage}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <div
                                        className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-out"
                                        style={{
                                            width: `${savingsPercentage}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* Asli AI-Powered Insight Panel */}
                        <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl mt-6">
                            <h4 className="text-sm font-bold text-orange-800 flex items-center gap-1.5">
                                🤖 Gemini AI Financial Advisor
                            </h4>
                            <p className="text-xs text-orange-700 mt-1.5 leading-relaxed font-medium">
                                {loadingAi ? (
                                    <span className="flex items-center gap-2">
                                        <span className="animate-spin text-sm">
                                            ⏳
                                        </span>{" "}
                                        Thinking and calculating your budgets...
                                    </span>
                                ) : (
                                    aiAdvice
                                )}
                            </p>
                        </div>

                        <div className="border-t border-gray-100 pt-6 mt-6">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4">
                                🛒 Category-wise Expenses
                            </h3>
                            <div className="space-y-4">
                                {Object.keys(categoryTotals).map((cat) => {
                                    const pct =
                                        totalExpense > 0
                                            ? Math.round(
                                                  (categoryTotals[cat] /
                                                      totalExpense) *
                                                      100,
                                              )
                                            : 0;

                                    return (
                                        <div key={cat} className="space-y-1">
                                            <div className="flex justify-between text-xs font-medium text-gray-600">
                                                <span className="capitalize">
                                                    {cat} ($
                                                    {categoryTotals[cat]})
                                                </span>
                                                <span>{pct}%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-2">
                                                <div
                                                    className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${pct}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
