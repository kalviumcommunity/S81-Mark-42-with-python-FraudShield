"""
Data Analysis Script: Transaction Fraud Analysis

This script demonstrates creating and running a Python script for data analysis.
It performs simple operations on transaction data including:
- Loading sample data
- Calculating statistics
- Identifying patterns
- Saving results

This is an example of script-based data analysis that can be:
- Run from the command line
- Automated with scheduling
- Included in pipelines
- Easily shared and reproduced

Usage:
    python analyze_transactions.py

Requirements:
    Python 3.10+
    pandas (pip install pandas)
"""

import pandas as pd
from datetime import datetime, timedelta

# ============================================================================
# CONFIGURATION
# ============================================================================
SCRIPT_NAME = "Transaction Fraud Analysis"
SCRIPT_VERSION = "1.0"
EXECUTION_DATE = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# ============================================================================
# SECTION 1: CREATE SAMPLE DATA
# ============================================================================
print("\n" + "="*70)
print(f"  {SCRIPT_NAME} v{SCRIPT_VERSION}")
print(f"  Execution Date: {EXECUTION_DATE}")
print("="*70)

print("\n[STEP 1] Creating sample transaction data...")

# Sample data dictionary
transaction_data = {
    'transaction_id': [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008],
    'amount': [100.50, 25.00, 5000.00, 150.75, 2500.00, 75.25, 9999.99, 50.00],
    'merchant': ['Grocery', 'Coffee', 'Electronics', 'Gas', 'Jewelry', 'Restaurant', 'Jewelry', 'Pharmacy'],
    'hour': [10, 9, 2, 15, 3, 18, 4, 11],
    'is_weekend': [False, False, False, False, True, True, True, False]
}

# Convert to DataFrame
df = pd.DataFrame(transaction_data)

print(f"✓ Created {len(df)} sample transactions")
print(f"\nSample Data:")
print(df.to_string(index=False))

# ============================================================================
# SECTION 2: BASIC STATISTICS
# ============================================================================
print("\n[STEP 2] Calculating basic statistics...")

total_transactions = len(df)
total_amount = df['amount'].sum()
average_amount = df['amount'].mean()
max_amount = df['amount'].max()
min_amount = df['amount'].min()

print(f"\nTransaction Statistics:")
print(f"  Total Transactions: {total_transactions}")
print(f"  Total Amount: ${total_amount:,.2f}")
print(f"  Average Amount: ${average_amount:,.2f}")
print(f"  Max Amount: ${max_amount:,.2f}")
print(f"  Min Amount: ${min_amount:,.2f}")

# ============================================================================
# SECTION 3: FRAUD DETECTION RULES
# ============================================================================
print("\n[STEP 3] Applying fraud detection rules...")

# Rule 1: Large amounts (> $2,000)
suspicious_high = df[df['amount'] > 2000]

# Rule 2: Late night transactions (between 10 PM and 6 AM)
suspicious_time = df[(df['hour'] < 6) | (df['hour'] > 22)]

# Rule 3: Jewelry purchases (high fraud category)
suspicious_category = df[df['merchant'] == 'Jewelry']

# Rule 4: Combination of rules
suspicious_combined = df[
    ((df['amount'] > 2000) | (df['merchant'] == 'Jewelry')) & 
    ((df['hour'] < 6) | (df['hour'] > 22))
]

print(f"\nFraud Rule Detections:")
print(f"  High amount transactions (> $2,000): {len(suspicious_high)}")
for idx, row in suspicious_high.iterrows():
    print(f"    - Transaction {row['transaction_id']}: ${row['amount']:,.2f}")

print(f"\n  Late night transactions (10 PM - 6 AM): {len(suspicious_time)}")
for idx, row in suspicious_time.iterrows():
    print(f"    - Transaction {row['transaction_id']}: {row['hour']:02d}:00")

print(f"\n  High-risk merchants (Jewelry): {len(suspicious_category)}")
for idx, row in suspicious_category.iterrows():
    print(f"    - Transaction {row['transaction_id']}: ${row['amount']:,.2f}")

print(f"\n  Combined suspicious (High amount/Jewelry + Late night): {len(suspicious_combined)}")
for idx, row in suspicious_combined.iterrows():
    print(f"    - Transaction {row['transaction_id']}: ${row['amount']:,.2f} at {row['hour']:02d}:00")

# ============================================================================
# SECTION 4: SUMMARY REPORT
# ============================================================================
print("\n[STEP 4] Generating summary report...")

# Calculate risk score
risk_count = len(suspicious_combined)
risk_percentage = (risk_count / total_transactions) * 100

print(f"\nFraud Risk Summary:")
print(f"  Total High-Risk Transactions: {risk_count} ({risk_percentage:.1f}%)")
print(f"  Safe Transactions: {total_transactions - risk_count} ({100 - risk_percentage:.1f}%)")

if risk_percentage == 0:
    risk_level = "LOW"
elif risk_percentage < 20:
    risk_level = "MEDIUM"
else:
    risk_level = "HIGH"

print(f"  Overall Risk Level: {risk_level}")

# ============================================================================
# SECTION 5: SCRIPT COMPLETION
# ============================================================================
print("\n" + "="*70)
print(f"  ✓ Script completed successfully!")
print(f"  Execution finished at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
print("="*70 + "\n")

# ============================================================================
# KEY POINTS DEMONSTRATED IN THIS SCRIPT
# ============================================================================
"""
This script demonstrates key scripting concepts:

1. IMPORTS: Libraries loaded at the top (pandas, datetime)
2. CONFIGURATION: Constants defined early (SCRIPT_NAME, EXECUTION_DATE)
3. COMMENTS: Clear section markers and inline documentation
4. SEQUENTIAL EXECUTION: Code runs top-to-bottom in order
5. VARIABLES: Data stored and reused (df, statistics)
6. PRINT STATEMENTS: Output visible in console
7. NO PERSISTENCE: Each run is independent (no kernel state)
8. COMPLETE FLOW: Takes input → processes → generates output
9. ERROR-RESISTANT: Uses basic operations without external dependencies
10. REUSABLE: Can be run multiple times with consistent results

Script vs Notebook Key Differences:
- Scripts run linearly from start to finish
- No persistent kernel state between runs
- Perfect for automation and scheduling
- Ideal for sharing and version control
- Better for production workflows
- Less interactive than notebooks

When to use scripts:
✓ Data processing pipelines
✓ Scheduled analysis runs
✓ Data validation checks
✓ Automated reporting
✓ Integration with other tools

When to use notebooks:
✓ Exploratory data analysis
✓ Learning and experimentation
✓ Visualization and storytelling
✓ Documentation with code
✓ Interactive analysis
"""
