# Data Directory

This folder contains all project data files, organized into two subdirectories:

## /raw
Original, unmodified source data. **DO NOT EDIT THESE FILES.**
- Contains datasets exactly as received from sources
- Serves as the single source of truth
- Acts as backup in case processed data is accidentally modified
- All transformations start from raw data

## /processed
Cleaned, transformed, and processed data ready for analysis.
- Created from raw data through data cleaning pipelines
- Safe to use in notebooks and models
- Can be regenerated from raw data
- Intermediate datasets for different analysis stages

## Best Practices
- ✅ Never modify files in /raw
- ✅ Always reference /raw for data loading
- ✅ Save processed outputs to /processed with clear names
- ✅ Document data transformations in notebooks
- ✅ Include data dictionaries or documentation for each dataset
