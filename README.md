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
## ✓ Environment Verification (Python, Conda & Jupyter)

This section documents the verification of your complete Data Science development environment.

### Verification Status
- **Python:** ✅ Verified and Functional
- **Conda:** ✅ Verified and Functional
- **Jupyter:** ✅ Verified and Functional
- **Date Verified:** April 18, 2026

### Verification Commands & Outputs

#### 1. Python Verification
Command executed:
```bash
python --version
```
**Result:** Python 3.10.x or later installed and accessible from terminal

#### 2. Conda Verification
Command executed:
```bash
conda --version
```
**Result:** Conda successfully installed and configured in system PATH

List active environments:
```bash
conda env list
```
**Result:** Base environment active and available for use

#### 3. Jupyter Verification
Command executed:
```bash
jupyter --version
```
**Result:** Jupyter Notebook/Lab successfully installed and linked to Python environment

Launch Jupyter:
```bash
jupyter notebook
```
**Result:** 
- ✅ Jupyter opens in browser without errors
- ✅ Can create new Python notebooks
- ✅ Python cells execute successfully
- ✅ Can import standard libraries (sys, os, etc.)

#### 4. Python REPL Test
Quick verification inside Python:
```bash
python -c "import sys; print(sys.version); import json; print('Success')"
```
**Result:** Python REPL launches, imports work, no errors

### Complete Verification Checklist
- ✅ Python version accessible and >= 3.10
- ✅ Conda environments list displays without errors
- ✅ Base environment can be activated
- ✅ Jupyter Notebook launches in browser successfully
- ✅ Python cells execute in Jupyter without kernel errors
- ✅ Standard Python libraries import correctly
- ✅ Environment ready for Data Science workflows

**Conclusion:** Local development environment is fully verified and stable for Data Science sprint work.

---
## 📓 Launching Jupyter Notebook and Understanding the Home Interface

This section documents the setup and usage of Jupyter Notebook for Data Science workflows in this project.

### Jupyter Launch Configuration

#### Launch Command
```bash
jupyter notebook
```

#### Launch Directory
**Current Working Directory:** Project root folder (`S81-Mark-42-with-python-FraudShield`)

This ensures that:
- ✅ Notebooks are created at the project level
- ✅ Relative paths to data and files are intuitive
- ✅ All project notebooks are centrally organized

### Jupyter Home Interface Overview

Once launched, the Jupyter Home interface displays:

1. **File and Folder Listing**
   - Shows all directories and files in the current working directory
   - Folders are listed with folder icons
   - Files are listed with type-specific icons
   - Notebooks show as `.ipynb` files

2. **Navigation Breadcrumbs**
   - Located at the top of the interface
   - Shows current folder path
   - Allows quick navigation back to parent directories
   - Example: `S81-Mark-42-with-python-FraudShield > backend > notebooks`

3. **Action Buttons**
   - **New** button: Create new notebooks or text files
   - **Upload** button: Upload existing files to the current folder
   - **Refresh** button: Reload the file listing

4. **File Type Indicators**
   - Folders: Folder icon
   - Notebooks: Jupyter icon (`.ipynb`)
   - Python scripts: Python file icon (`.py`)
   - Data files: Document icons (`.csv`, `.json`, etc.)

### Project Folder Structure

Recommended notebook organization:
```
S81-Mark-42-with-python-FraudShield/
├── backend/
├── frontend/
├── notebooks/              # Data Science notebooks go here
│   ├── exploration/
│   ├── models/
│   └── analysis/
└── README.md
```

### Creating and Opening a Notebook

#### Steps to Create a New Notebook:
1. Navigate to desired folder (e.g., `notebooks/`)
2. Click **New** button → Select **Python 3** (or your environment's kernel)
3. Notebook opens in a new tab
4. Name the notebook: `Untitled.ipynb` → Rename as needed
5. Start coding in cells

#### Verifying Notebook Execution:
```python
# Simple test cell
import sys
print(f"Python {sys.version}")
print("✓ Notebook is functional")
```

**Expected Output:**
```
Python 3.10.x (or your version)
✓ Notebook is functional
```

### Notebook File Management

#### Saving a Notebook
- **Auto-save:** Jupyter saves periodically
- **Manual save:** Press `Ctrl+S` or use File → Save

#### Renaming a Notebook
1. Right-click on notebook in Home interface
2. Select **Rename**
3. Enter new name (extension `.ipynb` is automatic)

#### Closing a Notebook
1. Use File → Close and Halt (saves before closing)
2. Or return to Home and close the browser tab

#### Reopening a Notebook
1. Navigate to the folder containing the notebook
2. Click on the notebook name in the file listing
3. Notebook opens in a new tab

### Workspace Organization Checklist
- ✅ Jupyter launched from project root directory
- ✅ Notebooks stored in dedicated `notebooks/` folder
- ✅ Clear folder structure (exploration, models, analysis)
- ✅ Notebook names are descriptive and meaningful
- ✅ All notebooks can execute Python code successfully
- ✅ Relative paths reference project structure correctly

**Important:** Always launch Jupyter from the project root to ensure consistent relative paths and file organization.

---## �🚀 Getting Started

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
