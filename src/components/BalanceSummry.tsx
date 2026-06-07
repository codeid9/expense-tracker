
interface BalanceSummaryProps {
  balance: number;
  income: number;
  expense: number;
}

export default function BalanceSummry({ balance, income, expense }: BalanceSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-8 mt-4">
      
      {/* Total Balance Card - Gradient Style */}
      <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-lg border border-slate-700/50 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-xl transition-all group-hover:scale-150"></div>
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Balance</span>
          <h2 className="text-3xl font-bold mt-1 tracking-tight">
            {balance < 0 ? '-' : ''}${Math.abs(balance)}
          </h2>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">Available Funds</span>
          <span className="text-lg">💳</span>
        </div>
      </div>

      {/* Total Income Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-all">
        <div>
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full">Total Inflow</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-3 tracking-tight">
            +${income}
          </h2>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3">
          <span className="text-xs text-slate-400">Active Earnings</span>
          <span className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-bold">↑</span>
        </div>
      </div>

      {/* Total Expense Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-all">
        <div>
          <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-full">Total Outflow</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-3 tracking-tight">
            -${expense}
          </h2>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3">
          <span className="text-xs text-slate-400">Monthly Spending</span>
          <span className="p-1.5 bg-rose-50 text-rose-600 rounded-lg text-sm font-bold">↓</span>
        </div>
      </div>

    </div>
  );
}