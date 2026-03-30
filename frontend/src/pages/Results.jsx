import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { result, data } = location.state || {};

    useEffect(() => {
        // Redirect if no result data (direct access)
        if (!result) {
            navigate('/');
        }
    }, [result, navigate]);

    if (!result) return null;

    const isSafe = result.status === 'Safe';

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg">
                {/* Header Section */}
                <div className={`p-8 text-center text-white ${isSafe ? 'bg-green-500' : 'bg-red-500'}`}>
                    <div className="text-6xl mb-4">{isSafe ? '✅' : '🚨'}</div>
                    <h2 className="text-3xl font-bold uppercase tracking-widest">{result.status}</h2>
                    <p className="mt-2 font-medium opacity-90">Risk Score: {result.score} / 4</p>
                </div>

                {/* Details Section */}
                <div className="p-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Transaction Recap</h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <p className="text-xs text-gray-400 uppercase">Amount</p>
                            <p className="font-bold text-gray-800">${data.amount}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase">Location</p>
                            <p className="font-bold text-gray-800">{data.location}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase">Recent Activity</p>
                            <p className="font-bold text-gray-800">{data.recentTransactions} hits</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase">Timestamp</p>
                            <p className="font-bold text-gray-800">{new Date(data.time).toLocaleTimeString()}</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <button 
                            onClick={() => navigate('/check')}
                            className="bg-gray-800 text-white py-3 rounded-lg font-bold hover:bg-gray-900 transition"
                        >
                            Verify Another
                        </button>
                        <button 
                            onClick={() => navigate('/')}
                            className="text-gray-500 border border-gray-200 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
                        >
                            Return to Dashboard
                        </button>
                    </div>
                </div>

                {/* Footer Insight */}
                <div className="bg-gray-50 p-4 text-center text-xs text-gray-400 italic">
                    {isSafe 
                        ? "No significant anomalies detected for this transaction." 
                        : "Heuristic rules triggered multiple flags. Security review recommended."}
                </div>
            </div>
        </div>
    );
};

export default Results;
