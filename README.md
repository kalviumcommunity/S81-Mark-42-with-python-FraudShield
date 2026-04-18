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
---

## 📝 Understanding Notebook Cells: Code vs Markdown

Jupyter Notebooks support two main cell types: **Code cells** and **Markdown cells**. Understanding the difference and using them intentionally is essential for writing professional, readable Data Science notebooks.

### Code Cells

**Purpose:** Execute Python code and display results

**Characteristics:**
- Contains executable Python statements
- Runs when you press `Ctrl+Enter` or click the Run button
- Displays output, errors, and results below the cell
- Can use variables from previously executed cells
- Should contain logic, not lengthy explanations

**When to use:**
- Executing data operations
- Running calculations
- Creating visualizations
- Writing functions and classes

**Example:**
```python
# Code cells should focus on logic
import pandas as pd

data = [1, 2, 3, 4, 5]
total = sum(data)
print(f"Sum: {total}")
```

### Markdown Cells

**Purpose:** Explain, describe, and structure your notebook with formatted text

**Characteristics:**
- Contains formatted text using Markdown syntax
- Does not execute code (for explanation only)
- Supports headings, bold, italics, lists, and tables
- Renders when cell is executed
- Essential for notebook documentation

**When to use:**
- Writing section titles and headings
- Explaining what the next code cell will do
- Interpreting code results
- Documenting findings and conclusions
- Providing context and narrative flow

**Example:**
```markdown
## Data Summary

This code cell calculates the sum of our dataset.
We expect the result to be 15 (1+2+3+4+5).
```

### Professional Notebook Structure

A well-organized notebook alternates between explanation and execution:

```
Markdown: "Load and explore the dataset"
    ↓
Code: Load data, display shape
    ↓
Markdown: "The dataset contains X rows and Y columns"
    ↓
Code: Analyze features
    ↓
Markdown: "Key insights from the analysis"
```

### Cell Type Conversions

**To change a cell from Code to Markdown:**
1. Select the cell
2. Press `M` (keyboard shortcut) or use Cell menu → Cell Type → Markdown

**To change a cell from Markdown to Code:**
1. Select the cell
2. Press `Y` (keyboard shortcut) or use Cell menu → Cell Type → Code

### Best Practices for Notebook Writing

✅ **DO:**
- Use Markdown cells to explain your reasoning
- Separate execution from explanation
- Write descriptive titles and section headings
- Document findings and conclusions
- Treat notebooks as documents meant for humans

❌ **DON'T:**
- Write long explanations as code comments only
- Leave notebooks as unexplained code dumps
- Mix extensive reasoning inside Code cells
- Assume readers will understand your code without context
- Use notebooks as temporary scratchpads

### Sample Notebook

A complete example demonstrating proper Code and Markdown cell usage is included in:
```
notebooks/01_notebook_cells_demo.ipynb
```

This notebook shows:
- ✅ Markdown cells explaining each section
- ✅ Code cells with focused Python logic
- ✅ Clear separation between execution and explanation
- ✅ Professional documentation and structure

**Remember:** Clear notebooks are readable notebooks. Readable notebooks are professional notebooks.

---

## ⚙️ Running, Restarting, and Interrupting Jupyter Kernels

The Jupyter **kernel** is the Python interpreter that executes your code and maintains your notebook's state. Understanding kernel control is essential for reproducibility, debugging, and preventing hidden state issues.

### What is a Kernel?

A kernel:
- **Executes cells** when you run them
- **Remembers variables** from previously executed cells (even if cells run out of order)
- **Maintains state** until it is restarted
- Can be **interrupted** if execution is taking too long

### Running Cells Intentionally

**Best Practice:** Run cells from top to bottom, but understand that the kernel remembers ALL variables from any cell you've executed, regardless of order.

**Problem:** Code might work once but fail later if cells depend on hidden execution order.

```python
# Cell 1: Initialize variable
count = 0

# Cell 2: Modify variable (depends on Cell 1)
count += 5

# Cell 3: Use variable (depends on Cells 1 & 2)
print(count)  # Works because Cells 1 & 2 were run
```

If someone runs only Cell 3, it will fail with `NameError: name 'count' is not defined`.

### Kernel Interruption

**Use interrupt to stop a long-running or stuck cell:**

- Click the **Stop** button (⏹️) in Jupyter toolbar
- Or press **I, I** (press I twice) in the notebook
- Stops execution but **preserves** kernel state and variables
- Useful for accidental infinite loops or slow computations

**When to interrupt:**
- Cell is taking unexpectedly long
- You started an infinite loop by mistake
- Execution is clearly frozen

### Kernel Restart

**Use restart to clear all state and reset the notebook:**

- Use Kernel menu → Restart Kernel → Restart
- Or click the **Restart** button in the toolbar
- Clears all variables from memory
- Resets execution counter to 0
- Wipes all outputs (but not your code)

**When to restart:**
- Testing notebook reproducibility
- Variables are stale or causing issues
- Need a clean state to debug
- **Before final submission** (best practice)

### Restart + Run All Best Practice

**This is professional practice:**

1. **Restart the kernel** (clears all state)
2. **Run All cells** (Kernel menu → Restart & Run All)
3. **Verify all cells execute successfully**
4. **Then submit/share the notebook**

This ensures your notebook works for anyone who opens it, not just on your machine.

### Recognizing Kernel Issues

| Symptom | Likely Cause | Solution |
|---------|-------------|----------|
| Cell works once but fails later | Cell order dependency, stale variables | Restart + Run All |
| "NameError: name X not defined" | Variable not initialized in any run cell | Check cell order, restart + run all |
| Notebook very slow | Large computation or infinite loop | Interrupt + optimize code |
| Code worked before, now fails | Variables modified unexpectedly | Restart + Run All |

### Example Notebook

A complete demonstration of kernel control is included in:
```
notebooks/02_kernel_management_demo.ipynb
```

This notebook shows:
- ✅ Cells depending on each other's variables
- ✅ Long-running code (interruptible)
- ✅ Kernel state awareness
- ✅ Restart and reproducibility testing

### Professional Checklist

Before submitting any notebook:
- ✅ Restart the kernel
- ✅ Run All cells from top to bottom
- ✅ All cells execute without errors
- ✅ All expected outputs appear
- ✅ Notebook is reproducible for others

---

## � Writing Markdown for Clear Notebook Documentation

Markdown cells are where you explain your analysis, structure your thinking, and communicate your methodology to readers. Clear Markdown transforms notebooks from code dumps into professional, review-ready documents.

### Why Markdown Matters

**Problems with poor documentation:**
- Code works but nobody understands the logic
- Results shown without context or interpretation
- Reviewers struggle to follow the methodology
- Future you can't remember why certain steps existed

**Benefits of clear Markdown:**
- ✅ Readers understand intent and approach
- ✅ Teammates can review and build on your work
- ✅ Notebooks are easier to debug
- ✅ Professional communication of your analysis

### Heading Hierarchy

Use headings (`#`, `##`, `###`) to structure your notebook logically:

```markdown
# Notebook Title (Use once at the top)
## Major Section (Use for main topics)
### Subsection (Use for related steps)
#### Minor Point (Use sparingly)
```

**Best Practice:** Create a clear outline-like structure. Readers should understand your notebook flow by just reading the headings.

### Unordered Lists

Use unordered lists for general points, features, or non-sequential items:

```markdown
- Item 1
- Item 2
  - Nested item
- Item 3
```

**When to use:** Listing assumptions, advantages, disadvantages, or general characteristics.

### Ordered Lists

Use ordered lists for step-by-step processes and sequential workflows:

```markdown
1. First step
2. Second step
3. Third step
```

**When to use:** Documenting methodology, processing steps, or numbered instructions.

### Inline Code Formatting

Use backticks (`) to format code references inline without executing them:

```markdown
The `sum()` function adds all elements, while `len()` returns count.
```

**When to use:** Variable names, function names, file names, and short code references that don't need execution.

### Code Blocks

Use fenced code blocks (triple backticks) to show longer code examples without executing:

```python
# Example code (not executed)
import pandas as pd
data = pd.read_csv('data.csv')
print(data.head())
```

```sql
-- SQL example
SELECT * FROM table WHERE amount > 1000;
```

**When to use:** 
- Explaining code syntax without execution
- Showing expected output format
- Examples from other languages
- Never duplicate code that will run in Code cells

### Recommended Notebook Pattern

Structure your notebook with this alternating pattern:

**Markdown Cell:** Explain what you'll do  
↓  
**Code Cell:** Execute the logic  
↓  
**Markdown Cell:** Interpret the results  
↓  
*(Repeat for each major step)*

This creates a clear narrative flow where code and explanation support each other.

### Example Structure

```markdown
## Loading and Exploring the Dataset

### Step 1: Import Libraries
Explain what libraries you'll use and why.

[Code cell: import statements]

### Step 2: Load Data
Explain where the data comes from and what to expect.

[Code cell: pd.read_csv()]

### Interpreting the Data
Explain what the data looks like and its key features.

[Continued documentation...]
```

### Best Practices Checklist

✅ **DO:**
- Use clear, hierarchical headings
- Explain intent before code cells
- Interpret results after code cells
- Use lists to organize complex information
- Format inline code for readability
- Keep explanations concise and purposeful
- Structure notebooks as readable documents

❌ **DON'T:**
- Rely solely on code comments for explanations
- Write long paragraphs without structure
- Skip Markdown cells between code
- Use code blocks for executable code
- Create notebooks without logical headings
- Assume readers understand uncommented code

### Example Notebook

A complete example demonstrating proper Markdown usage is included in:
```
notebooks/03_markdown_documentation_guide.ipynb
```

This notebook demonstrates:
- ✅ Proper heading hierarchy
- ✅ Ordered and unordered lists
- ✅ Inline code formatting
- ✅ Code blocks in Markdown
- ✅ Markdown + Code cell alternation
- ✅ Professional documentation structure

### Professional Impact

Clear Markdown:
1. **Improves collaboration** - Teammates understand your approach
2. **Enables code review** - Reviewers can follow your logic
3. **Facilitates debugging** - Clear structure helps identify issues
4. **Preserves knowledge** - Your future self remembers your reasoning
5. **Demonstrates professionalism** - Shows intentional, thoughtful work

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
