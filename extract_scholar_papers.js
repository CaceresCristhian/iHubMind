// Google Scholar Paper Extractor
// Run this script in the browser console on the Google Scholar profile page
// Copy and paste this into the browser console when viewing: https://scholar.google.com/citations?user=hLBNWsYAAAAJ&hl=en

(function() {
    console.log('Starting paper extraction...');
    
    const papers = [];
    const paperRows = document.querySelectorAll('tr.gsc_a_tr');
    
    paperRows.forEach((row, index) => {
        try {
            // Extract title and link
            const titleLink = row.querySelector('a.gsc_a_at');
            if (!titleLink) return;
            
            const title = titleLink.textContent.trim();
            const relativeLink = titleLink.getAttribute('href');
            const fullLink = relativeLink ? `https://scholar.google.com${relativeLink}` : '';
            
            // Extract authors and venue
            const authorsVenueDiv = row.querySelector('div.gs_gray');
            let authors = '';
            let venue = '';
            
            if (authorsVenueDiv) {
                const text = authorsVenueDiv.textContent.trim();
                // Usually format is "Authors - Venue" or just "Authors"
                const parts = text.split(' - ');
                authors = parts[0] ? parts[0].trim() : '';
                venue = parts[1] ? parts[1].trim() : '';
            }
            
            // Extract year
            const yearSpan = row.querySelector('span.gsc_a_y');
            const year = yearSpan ? parseInt(yearSpan.textContent.trim()) : null;
            
            // Extract citations if available
            const citationsLink = row.querySelector('a.gsc_a_c');
            const citations = citationsLink ? parseInt(citationsLink.textContent.trim()) || 0 : 0;
            
            papers.push({
                id: index + 1,
                title: title,
                authors: authors,
                venue: venue,
                year: year,
                citations: citations,
                scholarLink: fullLink
            });
        } catch (e) {
            console.error('Error extracting paper:', e);
        }
    });
    
    console.log(`\nExtracted ${papers.length} papers:\n`);
    console.log(JSON.stringify(papers, null, 2));
    
    // Also create formatted output for easy copying
    console.log('\n\n=== FORMATTED OUTPUT FOR papers.js ===\n');
    papers.forEach((paper, idx) => {
        // Determine tags based on title and venue
        const titleLower = paper.title.toLowerCase();
        const venueLower = (paper.venue || '').toLowerCase();
        
        const tags = [];
        if (titleLower.includes('machine learning') || titleLower.includes('ml ') || venueLower.includes('machine learning')) tags.push('machine-learning');
        if (titleLower.includes('deep learning') || titleLower.includes('neural network') || titleLower.includes('cnn') || titleLower.includes('rnn')) tags.push('deep-learning');
        if (titleLower.includes('artificial intelligence') || titleLower.includes('ai ') || titleLower.includes('artificial intelligence')) tags.push('artificial-intelligence');
        if (titleLower.includes('data science') || titleLower.includes('data analytics') || titleLower.includes('big data')) tags.push('data-science');
        if (titleLower.includes('bioinformatics') || titleLower.includes('biology') || titleLower.includes('genomic') || titleLower.includes('protein')) tags.push('bioinformatics');
        if (titleLower.includes('cybersecurity') || titleLower.includes('security') || titleLower.includes('intrusion')) tags.push('cybersecurity');
        if (titleLower.includes('explainable') || titleLower.includes('interpretable') || titleLower.includes('xai')) tags.push('explainable-ai');
        if (titleLower.includes('responsible') || titleLower.includes('ethical') || titleLower.includes('fairness')) tags.push('responsible-ai');
        if (titleLower.includes('iot') || titleLower.includes('internet of things')) tags.push('iot');
        if (titleLower.includes('healthcare') || titleLower.includes('medical') || titleLower.includes('clinical') || titleLower.includes('diagnosis')) tags.push('healthcare');
        
        // Default tags if none found
        if (tags.length === 0) {
            tags.push('machine-learning', 'artificial-intelligence');
        }
        
        const paperObj = {
            id: paper.id,
            title: `"${paper.title}"`,
            authors: `"${paper.authors}"`,
            venue: `"${paper.venue || 'N/A'}"`,
            year: paper.year || new Date().getFullYear(),
            tags: `[${tags.map(t => `"${t}"`).join(', ')}]`,
            scholarLink: `"${paper.scholarLink}"`
        };
        
        console.log(`    {`);
        console.log(`        id: ${paperObj.id},`);
        console.log(`        title: ${paperObj.title},`);
        console.log(`        authors: ${paperObj.authors},`);
        console.log(`        venue: ${paperObj.venue},`);
        console.log(`        year: ${paperObj.year},`);
        console.log(`        tags: ${paperObj.tags},`);
        console.log(`        scholarLink: ${paperObj.scholarLink}`);
        console.log(`    },`);
    });
    
    // Copy to clipboard helper
    const formattedPapers = papers.map((paper, idx) => {
        const titleLower = paper.title.toLowerCase();
        const venueLower = (paper.venue || '').toLowerCase();
        
        const tags = [];
        if (titleLower.includes('machine learning') || titleLower.includes('ml ')) tags.push('machine-learning');
        if (titleLower.includes('deep learning') || titleLower.includes('neural network')) tags.push('deep-learning');
        if (titleLower.includes('artificial intelligence') || titleLower.includes('ai ')) tags.push('artificial-intelligence');
        if (titleLower.includes('data science') || titleLower.includes('data analytics')) tags.push('data-science');
        if (titleLower.includes('bioinformatics') || titleLower.includes('biology')) tags.push('bioinformatics');
        if (titleLower.includes('cybersecurity') || titleLower.includes('security')) tags.push('cybersecurity');
        if (titleLower.includes('explainable') || titleLower.includes('interpretable')) tags.push('explainable-ai');
        if (titleLower.includes('responsible') || titleLower.includes('ethical')) tags.push('responsible-ai');
        if (titleLower.includes('iot') || titleLower.includes('internet of things')) tags.push('iot');
        if (titleLower.includes('healthcare') || titleLower.includes('medical')) tags.push('healthcare');
        if (tags.length === 0) tags.push('machine-learning', 'artificial-intelligence');
        
        return `    {
        id: ${paper.id},
        title: "${paper.title}",
        authors: "${paper.authors}",
        venue: "${paper.venue || 'N/A'}",
        year: ${paper.year || new Date().getFullYear()},
        tags: [${tags.map(t => `"${t}"`).join(', ')}],
        scholarLink: "${paper.scholarLink}"
    }`;
    }).join(',\n');
    
    console.log('\n\n=== COPY THIS TO papers.js ===\n');
    console.log(formattedPapers);
    
    return papers;
})();
