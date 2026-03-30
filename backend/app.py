from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from model import FraudShieldML # Import the ML logic

app = Flask(__name__)
# Enable CORS for the React frontend
CORS(app)

# Initialize ML Model
fs_ml = FraudShieldML()

# Historical transactions for simulation
HISTORY = []
KNOWN_LOCATIONS = ["Srivilliputtur", "Madurai", "Chennai"]

@app.route('/check-transaction', methods=['POST'])
def check_transaction():
    try:
        data = request.json
        
        # Extract inputs
        amount = float(data.get('amount', 0))
        location = data.get('location', '').strip()
        time_str = data.get('time', '') # Expected: 2024-03-30T10:30
        recent_txs = int(data.get('recentTransactions', 0))

        # Risk breakdown tracking
        score = 0
        rules_triggered = []

        # --- A. Rule-Based Checks (+1 point each) ---
        
        # 1. High Amount (> 3x Avg)
        avg = fs_ml.get_average_amount()
        if amount > (3 * avg):
            score += 1
            rules_triggered.append("High amount (> 3x average)")

        # 2. Unknown Location
        if location not in KNOWN_LOCATIONS:
            score += 1
            rules_triggered.append(f"New location detected: {location}")

        # 3. Unusual Time
        dt = datetime.fromisoformat(time_str)
        hour = dt.hour
        if hour < 6 or hour >= 23:
            score += 1
            rules_triggered.append(f"Unusual transaction time: {hour}:00")

        # 4. High Frequency
        if recent_txs > 3:
            score += 1
            rules_triggered.append("High transaction frequency in 24h")

        # --- B. Machine Learning Check (+2 points for anomaly) ---
        is_ml_anomaly = fs_ml.predict_anomaly(amount, hour, recent_txs)
        if is_ml_anomaly:
            score += 2
            rules_triggered.append("ML Model flagged statistical anomaly")

        # --- C. Risk Assessment ---
        status = "Safe"
        if score >= 4:
            status = "High Risk"
        elif score >= 2:
            status = "Suspicious"

        # Save to history
        tx_record = {
            "id": len(HISTORY) + 1,
            "amount": amount,
            "location": location,
            "time": time_str,
            "score": score,
            "status": status,
            "alerts": rules_triggered
        }
        HISTORY.insert(0, tx_record) # Insert at start

        # Limit history to latest 10
        if len(HISTORY) > 10:
            HISTORY.pop()

        return jsonify({
            "score": score,
            "status": status,
            "alerts": rules_triggered,
            "history": HISTORY
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/history', methods=['GET'])
def get_history():
    return jsonify(HISTORY)

if __name__ == '__main__':
    # Running on port 5000
    app.run(port=5000, debug=True)
