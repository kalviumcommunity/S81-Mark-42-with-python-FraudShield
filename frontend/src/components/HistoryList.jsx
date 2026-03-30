import React from 'react';

const HistoryList = ({ history }) => {
    if (!history || history.length === 0) {
        return (
            <div className="p-8 text-center text-gray-400 italic">
                No transaction history yet.
            </div>
        );
    }

    return (
        <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h3 className="font-bold text-gray-800 uppercase tracking-tight text-sm">Recent Transactions (AI Insights)</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-bold">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3 text-gray-600">Amount</th>
                            <th className="px-6 py-3">Location</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Score</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 italic text-sm">
                        {history.map((tx) => (
                            <tr key={tx.id} className="hover:bg-gray-50 transition duration-150">
                                <td className="px-6 py-4 text-gray-300">#{tx.id}</td>
                                <td className="px-6 py-4 font-bold text-gray-700">${tx.amount.toLocaleString()}</td>
                                <td className="px-6 py-4 text-gray-500">{tx.location}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${
                                        tx.status === 'Safe' ? 'bg-green-100 text-green-700' :
                                        tx.status === 'Suspicious' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-red-100 text-red-700'
                                    }`}>
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-mono text-gray-400 text-xs">{tx.score}/5</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-right border-t border-gray-100">
                <p className="text-[10px] text-gray-400">Total Records Logged: {history.length}</p>
            </div>
        </div>
    );
};

export default HistoryList;
