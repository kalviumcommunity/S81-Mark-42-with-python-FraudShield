# FraudShield AI - Hybrid Transaction Security

Modern full-stack web application with rule-based fraud detection and **Machine Learning (Isolation Forest)**.

---

### Tech Stack:
- **Backend:** Python Flask + Scikit-learn (ML)
- **Frontend:** React (Vite) + Tailwind CSS + Axios

---

## 🚀 Getting Started

### 1️⃣ Prerequisite
Make sure you have **Node.js** and **Python 3** installed.

---

### 2️⃣ Backend Setup (Flask + ML)
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment (Mandatory for ML libraries):
   ```bash
   python -m venv venv
   source venv/Scripts/activate  # Windows: .\venv\Scripts\Activate.ps1
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the AI server:
   ```bash
   python app.py
   ```
   > Backend: **http://localhost:5000**

---

### 3️⃣ Frontend Setup (Dashboard)
1. Open a **new** terminal and navigate to `frontend`:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   > Frontend: **http://localhost:5173**

---

## 🛠️ Hybrid Detection Logic
The system uses a **Hybrid Scoring System (0-5 range)**:

1. **Rule-Based (+1 Point Each):**
   - Amount > 3x Average ($2000)
   - New/Unknown Location
   - Unusual Night Time (11 PM - 6 AM)
   - High Frequency (> 3 txs/day)

2. **Machine Learning (+2 Points):**
   - **Isolation Forest** model detects statistical anomalies based on Amount, Time, and Frequency patterns.

**Risk Classification:**
- **0-1:** Safe (Green)
- **2-3:** Suspicious (Yellow)
- **4+:** High Risk (Red)
