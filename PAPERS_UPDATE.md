# Updating Research Papers

## How to Update the Research Papers List

The research papers are stored in `papers.js` in the `researchPapers` array. To add actual papers from Google Scholar:

### Steps:

1. **Visit each team member's Google Scholar profile:**
   - Prof. Talha Ali Khan: https://scholar.google.com/citations?hl=en&user=Z-t0qwoAAAAJ
   - Prof. Iftikhar Ahmed: https://scholar.google.com/citations?hl=en&user=wEdc-UUAAAAJ
   - Prof. Raja Hashim Ali: https://scholar.google.com/citations?user=hLBNWsYAAAAJ&hl=en

2. **For each paper, add an object to the `researchPapers` array with this structure:**

```javascript
{
    id: [unique number],
    title: "Paper Title",
    authors: "Author 1, Author 2, Author 3",
    venue: "Journal/Conference Name",
    year: 2024,
    tags: ["tag1", "tag2", "tag3"], // Choose from available tags
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=USER_ID&citation_for_view=CITATION_ID",
    abstract: "Paper abstract or description..."
}
```

### Available Tags:
- `machine-learning`
- `artificial-intelligence`
- `data-science`
- `deep-learning`
- `bioinformatics`
- `cybersecurity`
- `responsible-ai`
- `explainable-ai`
- `iot`
- `healthcare`

### Getting the Google Scholar Link:

1. Go to the paper on Google Scholar
2. Click on the paper title
3. Copy the URL from the address bar
4. Use that URL as the `scholarLink` value

### Example:

```javascript
{
    id: 19,
    title: "Your Paper Title Here",
    authors: "Raja Hashim Ali, Co-Author Name",
    venue: "Journal of Example",
    year: 2024,
    tags: ["machine-learning", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=ABC123",
    abstract: "This paper presents..."
}
```

### Notes:
- Keep the `id` unique and sequential
- The `tags` array determines which filter buttons will show the paper
- The `scholarLink` should be the direct link to the paper on Google Scholar
- Update the paper count in the display as you add more papers
