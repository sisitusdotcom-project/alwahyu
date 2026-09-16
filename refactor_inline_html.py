import os
import re

for root, _, files in os.walk('E:\\web-projects\\PROJECT PESANTREN\\alwahyu.com'):
    for file in files:
        if file.endswith('.html') and 'mysisi' not in root:
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Global replacements
            content = content.replace('style="margin-top: 100px;"', 'class="mt-100"')
            content = content.replace('class="page-content" class="mt-100"', 'class="page-content mt-100"')
            
            content = content.replace('style="margin-bottom: 20px;"', 'class="mb-20"')
            content = content.replace('style="margin-bottom:10px; font-weight:700;"', 'class="font-bold mb-10"')
            content = content.replace('style="border-radius:24px; padding: 20px;"', 'class="rounded-24 p-20"')
            content = content.replace('class="kurikulum-section mt-4 bg-light section-padding" class="rounded-24 p-20"', 'class="kurikulum-section mt-4 bg-light section-padding rounded-24 p-20"')
            
            # Administrasi replacements
            content = content.replace('style="margin-right: 8px;"', 'class="mr-8"')
            content = content.replace('class="ph-fill ph-file-text" class="mr-8"', 'class="ph-fill ph-file-text mr-8"')
            content = content.replace('class="ph-fill ph-graduation-cap" class="mr-8"', 'class="ph-fill ph-graduation-cap mr-8"')
            content = content.replace('class="ph-fill ph-folder-open" class="mr-8"', 'class="ph-fill ph-folder-open mr-8"')
            
            content = content.replace('style="margin-top: 10px; width: 100%;"', 'class="mt-10 w-100"')
            content = content.replace('class="btn-primary" class="mt-10 w-100"', 'class="btn-primary mt-10 w-100"')
            
            # Donasi specific progress bars
            content = content.replace('style="height: 8px; width: 100%; background: #e2e8f0; border-radius: 99px; overflow: hidden; margin-bottom: 12px;"', 'class="donasi-progress-bar-bg"')
            content = content.replace('style="font-size: 0.8rem; color: #64748b; display: flex; justify-content: space-between;"', 'class="donasi-progress-meta"')
            content = content.replace('style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-bottom: 24px;"', 'class="flex-center-wrap mb-24 gap-20"')
            content = content.replace('style="margin-bottom: 0; flex: 1; min-width: 250px;"', 'class="flex-1 min-w-250 mb-0"')
            content = content.replace('class="bank-detail-box" class="flex-1 min-w-250 mb-0"', 'class="bank-detail-box flex-1 min-w-250 mb-0"')
            content = content.replace('style="text-align: center; margin-bottom: 32px;"', 'class="text-center mb-32"')
            content = content.replace('style="max-width: 250px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"', 'class="qris-img"')
            
            # write back if changed
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
