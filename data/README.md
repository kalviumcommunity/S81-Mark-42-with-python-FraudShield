# Data Directory

This folder contains all project data, organized by lifecycle stage. Proper separation of raw and processed data is critical for reproducibility, auditability, and preventing data corruption.

## Directory Structure

```
data/
├── raw/                    # Original, unmodified source data
│   └── *.csv, *.json, etc. # Exactly as received from source
│
└── processed/              # Cleaned, transformed data
    └── *.csv, *.parquet    # Ready for analysis
```

## /raw - Raw Data (Read-Only)

**Purpose:** Original, unmodified source data—the single source of truth.

**Characteristics:**
- Contains datasets exactly as received from sources
- **NEVER EDITED OR MODIFIED** (treat as immutable)
- Serves as the authoritative source for all analysis
- Acts as a backup in case processed data is modified
- All transformations reference raw data as the starting point

**File Naming:**
```
transactions_2026_04_01.csv       # Date-stamped
customer_master.xlsx               # Clear source
fraud_incidents_raw.json           # Format indicated
```

**Access Pattern:**
```python
# Always READ from /raw
df_raw = pd.read_csv('data/raw/transactions.csv')

# Transform in memory
df_clean = df_raw.dropna()

# Write to /processed, NEVER back to /raw
df_clean.to_csv('data/processed/transactions_cleaned.csv')
```

**Why Raw Data is Sacred:**
- ✅ Preserves original source for audits
- ✅ Enables reproducibility (start from same data)
- ✅ Provides accountability (what was the source?)
- ✅ Allows version comparison
- ✅ Prevents accidental data loss
- ✅ Maintains historical record

**Permissions:** If possible, set `/raw` folders as read-only:
```bash
# Linux/Mac: chmod -R 444 data/raw/
# Windows: Right-click > Properties > Advanced > Read-only
```

## /processed - Processed Data

**Purpose:** Cleaned, transformed, analysis-ready data derived from raw data.

**Characteristics:**
- Created through documented transformation pipelines
- Safe to use in notebooks and models
- Can be completely regenerated from `/raw` data
- Clear lineage to source raw data
- Organized by processing stage or dataset type

**File Naming (Indicate Stage/Version):**
```
transactions_stage01_cleaned.csv        # Processing stage 1: cleaning
transactions_stage02_features.csv       # Stage 2: feature engineering
transactions_stage03_final.csv          # Stage 3: final preparation

# Or by version:
transactions_v1_cleaned.csv
transactions_v2_with_features.csv
transactions_v3_normalized.csv
```

**Processing Documentation:**
Every processed file should have documented transformations:

```python
"""
File: transactions_cleaned.csv

Source: data/raw/transactions.csv
Processing Steps:
1. Removed null values in 'amount' (12 rows)
2. Filtered transactions where amount <= 0 (45 rows)
3. Removed duplicate transactions by ID (8 rows)
4. Converted timestamp strings to datetime objects

Statistics:
- Input rows: 1,000,000
- Output rows: 999,935 (99.99%)
- Processing date: 2026-04-18
- Processing time: 2 minutes 15 seconds
- Output file size: 245 MB

Next steps: Use for model training
"""
```

**Data Processing Flow:**
```
data/raw/transactions.csv
    ↓
[Script: 01_clean_data.py]
    ├─ Remove nulls
    ├─ Filter invalid values
    ├─ Remove duplicates
    ↓
data/processed/transactions_cleaned.csv
    ↓
[Notebook: 02_feature_engineering.ipynb]
    ├─ Create temporal features
    ├─ Aggregate statistics
    ├─ Normalize values
    ↓
data/processed/transactions_features.csv
    ↓
[Notebook: 03_model_training.ipynb]
    Uses for ML model training
```

## Loading Data in Notebooks

### Correct Pattern:
```python
import pandas as pd
from config.paths import RAW_DATA_PATH, PROCESSED_DATA_PATH

# Step 1: Always load raw data
df_raw = pd.read_csv(f'{RAW_DATA_PATH}/transactions.csv')

# Step 2: Transform in memory (never modify raw)
df_clean = df_raw.copy()
df_clean = df_clean.dropna()
df_clean['amount'] = df_clean['amount'].astype(float)

# Step 3: Save to processed folder
df_clean.to_csv(f'{PROCESSED_DATA_PATH}/transactions_cleaned.csv', index=False)

# Step 4: Load processed for analysis
df_for_analysis = pd.read_csv(f'{PROCESSED_DATA_PATH}/transactions_cleaned.csv')
```

### Anti-Pattern (DON'T DO THIS):
```python
# ❌ WRONG: Modifying raw data directly
df = pd.read_csv('data/raw/transactions.csv')
df['amount'] = df['amount'].fillna(0)
df.to_csv('data/raw/transactions.csv')  # ❌ Overwrites raw data!

# ❌ WRONG: No traceability
df_processed = mysterious_function(raw_data)
df_processed.to_csv('data/processed/data.csv')  # How was it processed?

# ❌ WRONG: Loading from processed as input to create new processed
df1 = pd.read_csv('data/processed/v1.csv')
df2 = further_transform(df1)
df2.to_csv('data/processed/v2.csv')  # Should link to raw, not processed
```

## Data Dictionary & Metadata

For each dataset in `/processed`, maintain a data dictionary:

```
transactions_cleaned_METADATA.txt or .csv:

Column Name       Type      Description                    Source
─────────────────────────────────────────────────────────────────
transaction_id    int       Unique transaction identifier  raw
amount           float      Transaction amount in USD      raw
timestamp        datetime   Transaction timestamp UTC      raw, parsed
hour_of_day      int       Hour of day (0-23)             engineered
is_weekend       bool       True if transaction on weekend engineered
fraud_flag       int       0=legitimate, 1=fraud          raw, labeled
```

## Best Practices Summary

### RAW DATA RULES:
- ✅ **READ-ONLY:** Never edit, delete, or modify
- ✅ **DATED:** Include source date in filename
- ✅ **BACKED UP:** Keep secure copy
- ✅ **DOCUMENTED:** Note source and format
- ✅ **VERSIONED:** Keep historical versions

### PROCESSED DATA RULES:
- ✅ **TRACEABLE:** Document source and transformations
- ✅ **VERSIONED:** Clear version or stage numbers
- ✅ **REGENERABLE:** Can be recreated from raw
- ✅ **DOCUMENTED:** Include metadata and dictionaries
- ✅ **ORGANIZED:** Group by processing stage or dataset type

### DATA FLOW RULES:
- ✅ **ONE-DIRECTIONAL:** raw → processed → outputs
- ✅ **NO CIRCULAR:** Never use processed as input to create raw
- ✅ **SCRIPTABLE:** Transformations in code, not manual
- ✅ **AUDITABLE:** Full record of what was done
- ✅ **REPRODUCIBLE:** Same input always yields same output

## Troubleshooting

**Problem:** "I can't find my processed data"
**Solution:** Use `/processed` folder with consistent naming scheme

**Problem:** "Results changed but code didn't"
**Solution:** Check if raw data was accidentally modified; use version control

**Problem:** "Can't reproduce results from last week"
**Solution:** Save processed data and metadata; document transformations

**Problem:** "Multiple people overwriting same files"
**Solution:** Use date-stamped filenames; communicate transformation schedule

---

For more on data organization, see the main README section on "Organizing Raw Data, Processed Data, and Output Artifacts"
