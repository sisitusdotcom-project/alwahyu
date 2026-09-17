const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.html')) results.push(file);
        }
    });
    return results;
}

const files = walk('e:/web-projects/PROJECT PESANTREN/alwahyu.com');
let totalFixes = 0;
files.forEach(file => {
    let originalContent = fs.readFileSync(file, 'utf8');
    let content = originalContent;
    
    // Fix dropdown icon
    content = content.replace(/<span class="dropdown-icon">.*?<\/span>/g, '<span class="dropdown-icon">▼</span>');
    
    // Fix em-dash in specific contexts
    content = content.replace(/Mutqin (?:&amp;|&) Bersanad [—\-\?â€”\uFFFD] inti/gi, 'Mutqin &amp; Bersanad — inti');
    content = content.replace(/makna [—\-\?â€”\uFFFD] bukan/gi, 'makna — bukan');
    
    // Fix salallahu alaihi wasallam
    content = content.replace(/Rasulullah [ï·º\?]/g, 'Rasulullah ﷺ');
    
    // Fix Al-Qur'an quote
    content = content.replace(/Al-Qur[â€™\?']an/gi, 'Al-Qur\'an');
    
    // Fix footer logo subtitle
    content = content.replace(/Tahfidz Al-Qur'an/g, 'Tahfidz Al-Qur\'an'); // ensure standard quote

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        totalFixes++;
    }
});
console.log(`Fixed ${totalFixes} files.`);
