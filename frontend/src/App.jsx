import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './components/ResultCard';
import HistoryList from './components/HistoryList';

const API_URL = 'http://localhost:5000/check-transaction';

const App = () => {
    const [formData, setFormData] = useState({
        amount: '',
        location: '',
        time: '',
        recentTransactions: ''
    });
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFormData({ amount: '', location: '', time: '', recentTransactions: '' });
        setResult(null);
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post(API_URL, formData);
            setResult(response.data);
            setHistory(response.data.history || []);
        } catch (err) {
            setError(err.response?.data?.error || 'Server error. Make sure backend is running on port 5000.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-4 md:p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Header Section */}
                <div className="lg:col-span-12 flex flex-col items-center justify-center mb-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 shadow-sm animate-pulse">Live Dashboard</div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">FraudShield <span className="text-blue-600 italic">AI</span></h1>
                    <p className="text-slate-400 font-medium mt-1">Hybrid Machine Learning & Rule-Based Anomaly Detection</p>
                </div>

                {/* Left Column: Form & Result */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                        <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
                             <span className="bg-blue-100 text-blue-600 p-2 rounded-lg text-lg">💳</span>
                             <span>Transaction Profiler</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="group">
                                <label className="block text-xs font-bold text-slate-400 uppercase mb-1 transition-colors group-focus-within:text-blue-500">Amount ($)</label>
                                <input
                                    type="number"
                                    name="amount"
                                    required
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border transition-all hover:bg-white"
                                    placeholder="Enter transaction amount"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border hover:bg-white"
                                        placeholder="City / Store"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Frequency (24h)</label>
                                    <input
                                        type="number"
                                        name="recentTransactions"
                                        required
                                        value={formData.recentTransactions}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border hover:bg-white"
                                        placeholder="No. of TXs"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Time Profile</label>
                                <input
                                    type="datetime-local"
                                    name="time"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border hover:bg-white"
                                />
                            </div>

                            <div className="flex space-x-3 pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`flex-1 bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition shadow-lg shadow-slate-200 ${isLoading ? 'opacity-50' : ''}`}
                                >
                                    {isLoading ? 'Scanning Patterns...' : 'Analyze Transaction'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="bg-slate-100 text-slate-500 py-4 px-6 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-200 transition"
                                >
                                    Clear
                                </button>
                            </div>
                        </form>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-bold rounded-r-lg text-sm transition-all">
                            {error}
                        </div>
                    )}
                </div>

                {/* Right Column: Dynamic Results & History */}
                <div className="lg:col-span-7">
                    {/* Real-time Result Card */}
                    {result ? (
                        <ResultCard result={result} />
                    ) : (
                        <div className="bg-slate-100 border-2 border-dashed border-slate-200 rounded-2xl h-48 flex items-center justify-center text-slate-400 font-medium italic mb-8">
                            Awaiting real-time transaction analysis...
                        </div>
                    )}

                    {/* Transaction History Log (AI INSIGHTS) */}
                    <HistoryList history={history} />

                    {/* Meta Info */}
                    <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="text-blue-800 font-extrabold flex items-center mb-2 uppercase tracking-tighter text-sm">
                            <span className="mr-2">🔎</span> System Metrics
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <p className="text-[10px] uppercase text-blue-400 font-bold">ML Model</p>
                                <p className="text-xs font-bold text-blue-900">Isolation Forest</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] uppercase text-blue-400 font-bold">Latency</p>
                                <p className="text-xs font-bold text-blue-900">~140ms</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] uppercase text-blue-400 font-bold">Accuracy</p>
                                <p className="text-xs font-bold text-blue-900">Probabilistic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="mt-12 text-center text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
                Built with React Vite & Flask ML Stack • 2026
            </footer>
        </div>
    );
};

export default App;


