# Configuration Directory

This folder contains configuration files and constants for the project.

## Files
- `config.py` - Project-wide configuration constants
- `paths.py` - File path definitions
- `constants.py` - Shared constants and enums
- `.env` - Environment variables (not committed to git)

## Example config.py
```python
# Data paths
RAW_DATA_PATH = '../data/raw/'
PROCESSED_DATA_PATH = '../data/processed/'
OUTPUT_PATH = '../outputs/'

# Model parameters
RANDOM_STATE = 42
TEST_SIZE = 0.2
CV_FOLDS = 5

# Feature settings
TARGET_COLUMN = 'fraud'
DROP_COLUMNS = ['id', 'timestamp']
```

## Best Practices
- ✅ Centralize all magic numbers and paths in config
- ✅ Use config in notebooks: `from config.config import RAW_DATA_PATH`
- ✅ Never hard-code paths or parameters
- ✅ Keep .env out of version control (use .gitignore)
- ✅ Document what each config parameter does
