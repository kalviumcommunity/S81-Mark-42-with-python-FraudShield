# 🐍 Creating and Running Python Scripts for Data Analysis

## Overview

While Jupyter Notebooks are excellent for exploration and learning, Python scripts are essential for repeatable, automatable, and production-ready data analysis workflows. Understanding when and how to use scripts is a critical skill for professional Data Science work.

## What is a Python Script?

A Python script is a `.py` file containing Python code that runs from top to bottom. Unlike notebooks:
- Scripts have a single entry point (start to finish execution)
- No persistent kernel state between runs
- Perfect for automation, scheduling, and reproducibility
- Easy to version control and share
- Ideal for production workflows

## Notebooks vs Scripts: When to Use Each

### Use Jupyter Notebooks when:
- ✅ Exploring and understanding data
- ✅ Creating visualizations and storytelling
- ✅ Learning and experimenting
- ✅ Documenting analysis process
- ✅ Sharing findings interactively

### Use Python Scripts when:
- ✅ Processing data in pipelines
- ✅ Running automated analysis
- ✅ Scheduling regular tasks
- ✅ Validating data quality
- ✅ Sharing reproducible code
- ✅ Building production workflows

## Key Differences: Notebooks vs Scripts

| Aspect | Notebook | Script |
|--------|----------|--------|
| **Execution** | Cell-by-cell, interactive | Top-to-bottom, linear |
| **State** | Variables persist in kernel | Fresh environment each run |
| **Order** | Can run cells in any sequence | Must run sequentially |
| **Automation** | Difficult to schedule | Perfect for automation |
| **Sharing** | Interactive, visual | Code-focused, reproducible |
| **Best For** | Exploration, learning | Production, pipelines |

## Creating Your First Script

### File Structure

```
project_root/
├── src/
│   ├── __init__.py
│   ├── preprocessing.py      # Reusable functions
│   ├── utils.py              # Utility functions
│   └── analyze_transactions.py # Main analysis script
```

### Basic Script Template

```python
"""
Module: Transaction Analysis Script

Purpose: Demonstrate creating and running Python scripts for data analysis

Usage:
    python analyze_transactions.py
"""

# 1. IMPORTS (at the top)
import pandas as pd
from datetime import datetime

# 2. CONFIGURATION
SCRIPT_NAME = "Transaction Analysis"
OUTPUT_PATH = "outputs/reports/"

# 3. MAIN LOGIC
def load_data():
    """Load sample transaction data."""
    data = {
        'id': [1, 2, 3],
        'amount': [100, 250, 50]
    }
    return pd.DataFrame(data)

def analyze_data(df):
    """Analyze transactions."""
    total = df['amount'].sum()
    average = df['amount'].mean()
    return total, average

# 4. EXECUTION
if __name__ == "__main__":
    print(f"Starting {SCRIPT_NAME}...")
    
    # Load data
    df = load_data()
    print(f"Loaded {len(df)} transactions")
    
    # Analyze
    total, average = analyze_data(df)
    print(f"Total: ${total:,.2f}")
    print(f"Average: ${average:,.2f}")
    
    print("✓ Analysis complete!")
```

## Running Scripts

### From Terminal/Command Line

```bash
# Navigate to project directory
cd path/to/project

# Run script using Python
python src/analyze_transactions.py

# Run with output redirection
python src/analyze_transactions.py > outputs/results.txt

# Run with error redirection
python src/analyze_transactions.py 2> outputs/errors.log

# Run in Windows PowerShell
python .\src\analyze_transactions.py
```

### From VS Code

1. **Using the Run Button**: Click the ▶️ button in the top-right corner of the editor
2. **Right-Click Menu**: Right-click the script → "Run Python File in Terminal"
3. **Keyboard Shortcut**: Press `Ctrl+F5` (or configure custom shortcut)
4. **Terminal Method**: Open terminal and type the command above

### Expected Output

When running `src/analyze_transactions.py`, you'll see:

```
======================================================================
  Transaction Fraud Analysis v1.0
  Execution Date: 2026-04-18 14:30:00
======================================================================

[STEP 1] Creating sample transaction data...
✓ Created 8 sample transactions

Sample Data:
   transaction_id  amount   merchant  hour  is_weekend
            1001   100.50    Grocery    10       False
            1002    25.00     Coffee     9       False
            1003  5000.00 Electronics    2       False
...
[STEP 2] Calculating basic statistics...

Transaction Statistics:
  Total Transactions: 8
  Total Amount: $23,301.49
  Average Amount: $2,912.69
...
```

## Example Script in Project

The project includes a complete example script demonstrating professional practices:

**File**: `src/analyze_transactions.py`

**This script demonstrates:**
- ✅ Clear structure with organized sections
- ✅ Comprehensive documentation and comments
- ✅ Data creation and manipulation with pandas
- ✅ Rule-based fraud detection logic
- ✅ Statistics calculation and analysis
- ✅ Summary reporting and output formatting
- ✅ Console output for visibility
- ✅ Comments explaining script vs notebook differences

**To run it:**
```bash
cd path/to/project
python src/analyze_transactions.py
```

## Common Issues and Solutions

### Issue: "ModuleNotFoundError"

```python
# WRONG: Relative imports may fail
from src.utils import clean_data  # ❌ In script context

# RIGHT: Adjust import path or use absolute imports
import sys
sys.path.append('..')
from src.utils import clean_data  # ✓
```

### Issue: "FileNotFoundError" when loading data

```python
# WRONG: Relative to notebook directory
df = pd.read_csv('data/raw/transactions.csv')  # ❌ May fail

# RIGHT: Use absolute paths or configuration
from config.paths import RAW_DATA_PATH
df = pd.read_csv(f'{RAW_DATA_PATH}/transactions.csv')  # ✓
```

### Issue: Script runs but produces no output

```python
# WRONG: No print statements
result = df['amount'].sum()  # ❌ Result is lost

# RIGHT: Use print for visibility
result = df['amount'].sum()
print(f"Total: ${result:,.2f}")  # ✓ Output visible
```

### Issue: Script takes too long or hangs

```python
# WRONG: No progress indicators
for i in range(1000000):
    process_item(i)  # ❌ User doesn't know if it's working

# RIGHT: Print progress updates
for i in range(1000000):
    process_item(i)
    if (i + 1) % 100000 == 0:
        print(f"✓ Processed {i+1} items...")  # ✓ Shows progress
```

## Best Practices for Scripts

### DO:
- ✅ Include module docstrings explaining script purpose
- ✅ Use clear section comments (# 1. IMPORTS, # 2. CONFIG, etc.)
- ✅ Define configuration at the top
- ✅ Use functions for reusable logic
- ✅ Print progress updates
- ✅ Handle errors gracefully with try/except
- ✅ Test scripts thoroughly before scheduling
- ✅ Version control scripts in Git
- ✅ Use meaningful variable names
- ✅ Add timestamps to output files

### DON'T:
- ❌ Rely on notebook-specific features (%matplotlib, %timeit, !pip)
- ❌ Mix code and configuration
- ❌ Skip error handling
- ❌ Assume working directory is correct
- ❌ Use absolute hardcoded paths (e.g., C:\Users\...)
- ❌ Leave scripts without documentation
- ❌ Print excessive debug information
- ❌ Forget to close files/connections

## Moving Code from Notebooks to Scripts

### Step 1: Copy relevant cells
```python
# Extract code from notebook
df = pd.read_csv('data/raw/transactions.csv')
df_clean = df.dropna()
df_clean['hour'] = pd.to_datetime(df_clean['timestamp']).dt.hour
```

### Step 2: Remove notebook-specific code
```python
# Remove these from notebooks:
%matplotlib inline      # ❌ Magic command
!pip install pandas     # ❌ Shell command
display(df)             # ❌ Notebook display
from IPython.display import HTML  # ❌ Notebook imports
```

### Step 3: Add proper imports and structure
```python
"""Script: Clean transaction data"""
import pandas as pd

# Define function for reusability
def clean_transactions(input_path, output_path):
    """Load, clean, and save transaction data."""
    df = pd.read_csv(input_path)
    df_clean = df.dropna()
    df_clean['hour'] = pd.to_datetime(df_clean['timestamp']).dt.hour
    df_clean.to_csv(output_path, index=False)
    print(f"✓ Saved {len(df_clean)} cleaned transactions")

# Execute when script runs
if __name__ == "__main__":
    clean_transactions('data/raw/transactions.csv', 
                       'data/processed/transactions_clean.csv')
```

### Step 4: Test thoroughly

```bash
# Run the script and verify it works
python src/clean_transactions.py

# Check the output was created
ls data/processed/transactions_clean.csv

# Verify the output file has the expected content
head -5 data/processed/transactions_clean.csv
```

### Step 5: Handle errors gracefully

```python
def clean_transactions(input_path, output_path):
    """Load, clean, and save transaction data."""
    try:
        if not os.path.exists(input_path):
            print(f"❌ Input file not found: {input_path}")
            return False
        
        df = pd.read_csv(input_path)
        df_clean = df.dropna()
        
        # Create output directory if needed
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        df_clean.to_csv(output_path, index=False)
        print(f"✓ Saved {len(df_clean)} cleaned transactions")
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False
```

## Professional Python Script Workflow

```
1. Create Script
   ↓
2. Write Code (Organized by section)
   ↓
3. Add Documentation (docstrings, comments)
   ↓
4. Test Locally (multiple test cases)
   ↓
5. Handle Errors (try/except, validation)
   ↓
6. Version Control (Git commit/push)
   ↓
7. Share and Collaborate (PR review)
   ↓
8. Automate/Schedule (cron jobs, task scheduler)
```

## Summary

Scripts are the bridge from experimentation (notebooks) to production (automation). Key points to remember:

- **Notebooks**: Exploration, visualization, learning
- **Scripts**: Automation, production, reproducibility
- **Both together**: Complete Data Science workflow

Mastering scripts transforms you from a data explorer to a professional Data Scientist capable of building reproducible, automatable data pipelines.

### Quick Reference

| Task | Command |
|------|---------|
| Run script | `python src/script_name.py` |
| Run with output save | `python src/script_name.py > outputs/result.txt` |
| Run in background | `python src/script_name.py &` (Linux/Mac) |
| Debug script | Add `print()` statements, then re-run |
| Check syntax | `python -m py_compile src/script_name.py` |

