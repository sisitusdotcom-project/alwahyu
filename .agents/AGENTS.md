# Global Agent Rules for alwahyu.com

## Strict Encoding & Scripting Rules

**CRITICAL: NEVER USE POWERSHELL FOR TEXT MANIPULATION.**
Windows PowerShell commands like `Get-Content`, `Set-Content`, `Add-Content`, and `-replace` are notorious for corrupting UTF-8 multibyte characters (like `▼`, `—`, `ﷺ`, `’`) by silently converting them to ANSI or Windows-1252.

**Rule 1: Use Python or Node.js for Scripting**
If you need to perform mass file replacements, text manipulation, or content rewriting across multiple files, you MUST use a robust scripting language like Python (or Node.js). 

**Rule 2: Always Explicitly Define UTF-8**
When reading or writing files in Python, ALWAYS specify `encoding="utf-8"`.
Example:
```python
with open('file.html', 'r', encoding='utf-8') as f:
    content = f.read()

# ... processing ...

with open('file.html', 'w', encoding='utf-8') as f:
    f.write(content)
```

**Rule 3: Avoid `replace_file_content` if Unsure about Encoding**
If a file contains delicate Arabic symbols or complex Unicode, and you are unsure if standard IDE tools or PowerShell will corrupt it, fall back to Python scripts to ensure data integrity.

**Rule 4: Double Check Replacements**
Never run a global replace without verifying what characters it might break. Always run a dry-run or verify the `diff` immediately after.

Adhere to these rules strictly to prevent wasting time on repetitive encoding errors.
