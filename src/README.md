# Source Code Directory

This folder contains reusable Python modules, utilities, and helper functions.

## Organization
- `__init__.py` - Makes src a Python package
- `utils.py` or `utils/` - Utility functions used across notebooks
- `preprocessing.py` - Data cleaning and transformation functions
- `models.py` - Custom model classes or wrappers
- `visualization.py` - Reusable plotting functions
- `config.py` - Configuration constants

## Best Practices
- ✅ Create reusable functions instead of copying code
- ✅ Document all functions with docstrings
- ✅ Import utilities in notebooks: `from src.utils import function_name`
- ✅ Keep functions focused and testable
- ✅ Use consistent naming conventions


## Example Usage
```python
# In your notebook
from src.preprocessing import clean_data
from src.utils import calculate_metrics

cleaned_data = clean_data(raw_data)
metrics = calculate_metrics(cleaned_data)
```
