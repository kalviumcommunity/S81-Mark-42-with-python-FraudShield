# FraudShield AI - Hybrid Transaction Security

Modern full-stack web application with rule-based fraud detection and **Machine Learning (Isolation Forest)**.

---

### Tech Stack:
- **Backend:** Python Flask + Scikit-learn (ML)
- **Frontend:** React (Vite) + Tailwind CSS + Axios

---

## � Local Development Environment Setup

This project requires Python and Anaconda for Data Science and ML operations. Below is the verified setup for this development environment.

### Environment Details
- **Operating System:** Windows 11
- **Python Version:** 3.10.x (or later)
- **Anaconda Version:** Latest (Miniconda/Anaconda3)
- **Environment Type:** Conda (base environment)

### Installation & Verification Steps

#### 1. Python Installation
Python is included with Anaconda. To verify after Anaconda installation:
```bash
python --version
```
Expected output: `Python 3.10.x` or higher

#### 2. Anaconda Installation
- Downloaded and installed Anaconda from [anaconda.com](https://www.anaconda.com/download)
- Installation completed successfully with default settings
- Conda is configured in system PATH

To verify Conda installation:
```bash
conda --version
```
Expected output: `conda X.X.X` (version number)

#### 3. Conda Environment Validation
Activate the base environment and verify functionality:
```bash
conda activate
python -c "import sys; print(sys.version)"
```

#### 4. Project Environment Setup
For this specific project, use the backend virtual environment:
```bash
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1  # Windows PowerShell
```

Verify the environment is active (you should see `(venv)` in your terminal).

### Verification Checklist
✅ Python executable accessible from terminal  
✅ Conda package manager accessible from terminal  
✅ Virtual environment can be created and activated  
✅ Python REPL launches without errors  
✅ Ready for ML library installation (scikit-learn, pandas, etc.)

---

## �🚀 Getting Started

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
