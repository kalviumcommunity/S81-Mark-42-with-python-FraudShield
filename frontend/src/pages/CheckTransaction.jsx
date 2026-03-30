import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/check-transaction';

const CheckTransaction = () => {
    const [formData, setFormData] = useState({
        amount: '',
        location: '',
        time: '',
        recentTransactions: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post(API_URL, formData);
            // Navigate to results page with the data received
            navigate('/result', { state: { result: response.data, data: formData } });
        } catch (err) {
            setError(err.response?.data?.error || 'Server error. Make sure backend is running.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setFormData({ amount: '', location: '', time: '', recentTransactions: '' });
        setError(null);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">New Transaction</h2>
                    <button onClick={() => navigate('/')} className="text-blue-500 hover:underline text-sm font-medium">Back Home</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            required
                            value={formData.amount}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                            placeholder="Amount in dollars"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                            placeholder="e.g., Madurai"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Time</label>
                        <input
                            type="datetime-local"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Recent Transactions (24h)</label>
                        <input
                            type="number"
                            name="recentTransactions"
                            required
                            value={formData.recentTransactions}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                            placeholder="Frequency"
                        />
                    </div>

                    <div className="flex space-x-3 pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-200 ${isLoading ? 'opacity-50' : ''}`}
                        >
                            {isLoading ? 'Processing...' : 'Verify'}
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-bold hover:bg-gray-300 transition duration-200"
                        >
                            Clear
                        </button>
                    </div>
                </form>

                {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-center font-medium">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckTransaction;
