import React from 'react';

const ResultCard = ({ result }) => {
    if (!result) return null;

    const { status, score, alerts } = result;

    const getStatusStyles = () => {
        switch (status) {
            case 'Safe':
                return {
                    bg: 'bg-green-500',
                    border: 'border-green-600',
                    text: 'text-white',
                    icon: '✅'
                };
            case 'Suspicious':
                return {
                    bg: 'bg-yellow-400',
                    border: 'border-yellow-600',
                    text: 'text-gray-800',
                    icon: '⚠️'
                };
            case 'High Risk':
                return {
                    bg: 'bg-red-600',
                    border: 'border-red-800',
                    text: 'text-white',
                    icon: '🚨'
                };
            default:
                return { bg: 'bg-gray-500', border: 'border-gray-600', text: 'text-white', icon: '❓' };
        }
    };

    const styles = getStatusStyles();

    return (
        <div className={`rounded-xl shadow-lg overflow-hidden border-2 mb-8 ${styles.border}`}>
            <div className={`p-4 flex items-center justify-between ${styles.bg} ${styles.text}`}>
                <div className="flex items-center space-x-3">
                    <span className="text-3xl">{styles.icon}</span>
                    <h2 className="text-2xl font-bold uppercase tracking-wider">{status}</h2>
                </div>
                <div className="text-center">
                    <p className="text-xs uppercase font-medium opacity-80">Risk Score</p>
                    <p className="text-3xl font-black">{score}</p>
                </div>
            </div>

            <div className="p-6 bg-white">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Risk Factors Detected</h3>
                {alerts && alerts.length > 0 ? (
                    <ul className="space-y-3">
                        {alerts.map((alert, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700">
                                <span className="text-red-400 mt-1">•</span>
                                <span className="text-sm italic">{alert}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-sm italic">No specific risk patterns triggered. Standard transaction profile.</p>
                )}
            </div>
        </div>
    );
};

export default ResultCard;
