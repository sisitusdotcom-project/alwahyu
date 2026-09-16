import os
import re

css_dir = 'assets/css'

def replace_font_sizes(content):
    # h1 sizes (>= 1.8rem)
    content = re.sub(r'font-size:\s*([2-9]\.\d+rem|1\.[89]\d*rem);', r'font-size: var(--fs-h1);', content)
    # h2 sizes (1.4rem to 1.7rem)
    content = re.sub(r'font-size:\s*(1\.[4-7]\d*rem);', r'font-size: var(--fs-h2);', content)
    # h3 sizes (1.1rem to 1.35rem)
    content = re.sub(r'font-size:\s*(1\.[1-3]\d*rem);', r'font-size: var(--fs-h3);', content)
    # body sizes (0.9rem to 1.05rem, 16px)
    content = re.sub(r'font-size:\s*(1\.0\d*rem|1rem|0\.9\d*rem|16px|15px);', r'font-size: var(--fs-body);', content)
    # small sizes (<= 0.89rem, <= 14px)
    content = re.sub(r'font-size:\s*(0\.[7-8]\d*rem|14px|13px|12px|11px|10px);', r'font-size: var(--fs-small);', content)
    return content

for root, _, files in os.walk(css_dir):
    for file in files:
        if file.endswith('.css') and file not in ['variables.css', 'reset.css', 'animations.css']:
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Skip layout.css since we carefully edited it already, except if there are leftovers
            # Actually let's just process all to be fully consistent
            new_content = replace_font_sizes(content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
