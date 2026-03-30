import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg text-center">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-4">FraudShield</h1>
                <p className="text-gray-600 mb-8">
                    Protect your finances with our advanced rule-based anomaly detection system. 
                    Analyze patterns and verify transactions in real-time.
                </p>
                <div className="space-y-4">
                    <Link 
                        to="/check" 
                        className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
                    >
                        Start Transaction Check
                    </Link>
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 mt-8">
                        <div className="p-2 border border-dashed rounded italic">Rule-based scoring</div>
                        <div className="p-2 border border-dashed rounded italic">Location validation</div>
                        <div className="p-2 border border-dashed rounded italic">Anomaly detection</div>
                        <div className="p-2 border border-dashed rounded italic">Instant feedback</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
