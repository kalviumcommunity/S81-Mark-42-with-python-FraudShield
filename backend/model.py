import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest
import datetime

class FraudShieldML:
    def __init__(self):
        self.model = IsolationForest(contamination=0.1, random_state=42)
        self.is_trained = False
        self._generate_training_data()

    def _generate_training_data(self):
        """Generates synthetic normal transaction data for training."""
        # 100 normal transactions
        data = {
            'amount': np.random.normal(2000, 500, 100), # Avg $2k
            'hour': np.random.randint(6, 23, 100),      # Day time hours
            'frequency': np.random.randint(0, 3, 100)   # Low frequency
        }
        df = pd.DataFrame(data)
        # Ensure all amounts are positive
        df['amount'] = df['amount'].clip(lower=10)
        self.train(df)

    def train(self, df):
        """Fits the Isolation Forest model on provided data."""
        self.model.fit(df[['amount', 'hour', 'frequency']])
        self.is_trained = True

    def predict_anomaly(self, amount, hour, frequency):
        """Predicts if a transaction is an anomaly using the ML model."""
        if not self.is_trained:
            return 0
        
        test_data = pd.DataFrame([[amount, hour, frequency]], 
                                columns=['amount', 'hour', 'frequency'])
        # IsolationForest returns -1 for outliers and 1 for inliers
        prediction = self.model.predict(test_data)
        return 1 if prediction[0] == -1 else 0

    def get_average_amount(self):
        """Mock average for rule-based check."""
        return 2000
