# Instructions to Extract Papers from Google Scholar

## Method 1: Using Browser Console (Recommended)

1. **Open the Google Scholar profile page:**
   - Go to: https://scholar.google.com/citations?user=hLBNWsYAAAAJ&hl=en
   - Make sure all papers are loaded (scroll down to load more if needed)

2. **Open Browser Developer Console:**
   - Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
   - Go to the "Console" tab

3. **Run the extraction script:**
   - Open the file `extract_scholar_papers.js`
   - Copy the entire content
   - Paste it into the browser console
   - Press Enter

4. **Copy the output:**
   - The script will output formatted paper data
   - Look for the section marked "=== COPY THIS TO papers.js ==="
   - Copy that output

5. **Update papers.js:**
   - Open `papers.js`
   - Replace the existing `researchPapers` array (or add to it)
   - Paste the copied data

## Method 2: Manual Entry

If the script doesn't work, you can manually add papers:

1. Visit the Google Scholar page
2. For each paper, note:
   - Title
   - Authors (all authors as listed)
   - Venue (journal/conference name)
   - Year
   - Direct link to the paper

3. Add to `papers.js` following this format:

```javascript
{
    id: [next number],
    title: "Paper Title Here",
    authors: "Author 1, Author 2, Author 3",
    venue: "Journal or Conference Name",
    year: 2024,
    tags: ["machine-learning", "bioinformatics"], // Choose appropriate tags
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=..."
}
```

## Available Tags

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

## Getting the Direct Paper Link

1. Click on the paper title in Google Scholar
2. Copy the URL from the address bar
3. Use that as the `scholarLink` value
