// Script to extract publication years from Google Scholar
// Run this in browser console on the Google Scholar profile pages

// For Prof. Raja Hashim Ali: https://scholar.google.com/citations?user=hLBNWsYAAAAJ&hl=en
// For Prof. Talha Ali Khan: https://scholar.google.com/citations?hl=en&user=Z-t0qwoAAAAJ
// For Prof. Iftikhar Ahmed: https://scholar.google.com/citations?hl=en&user=wEdc-UUAAAAJ

(function() {
    const papers = [];
    const rows = document.querySelectorAll('tr.gsc_a_tr');
    
    rows.forEach((row, idx) => {
        const titleLink = row.querySelector('a.gsc_a_at');
        if (!titleLink) return;
        
        const title = titleLink.textContent.trim();
        
        // Extract year
        const yearSpan = row.querySelector('span.gsc_a_y');
        const year = yearSpan ? parseInt(yearSpan.textContent.trim()) : null;
        
        papers.push({
            id: idx + 1,
            title: title,
            year: year
        });
    });
    
    console.log('\n=== PAPER YEARS ===\n');
    papers.forEach((paper, idx) => {
        console.log(`${idx + 1}. "${paper.title.substring(0, 60)}..." - Year: ${paper.year || 'N/A'}`);
    });
    
    console.log('\n=== JSON FORMAT ===\n');
    console.log(JSON.stringify(papers, null, 2));
    
    return papers;
})();
