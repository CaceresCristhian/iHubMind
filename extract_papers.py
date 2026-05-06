#!/usr/bin/env python3
"""
Script to extract research papers from Google Scholar profile
Run this script to extract papers and update papers.js
"""

import requests
from bs4 import BeautifulSoup
import json
import re

def extract_papers_from_scholar(user_id):
    """
    Extract papers from Google Scholar profile
    Note: Google Scholar may require JavaScript rendering, so this might need selenium
    """
    url = f"https://scholar.google.com/citations?user={user_id}&hl=en"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            papers = []
            
            # Google Scholar structure - this may need adjustment
            paper_elements = soup.find_all('tr', class_='gsc_a_tr')
            
            for paper in paper_elements:
                title_elem = paper.find('a', class_='gsc_a_at')
                if title_elem:
                    title = title_elem.text.strip()
                    link = f"https://scholar.google.com{title_elem.get('href', '')}"
                    
                    # Extract authors and venue
                    authors_venue = paper.find('div', class_='gs_gray')
                    if authors_venue:
                        text = authors_venue.text
                        # Try to parse authors and venue
                        parts = text.split(' - ')
                        authors = parts[0].strip() if len(parts) > 0 else ""
                        venue = parts[1].strip() if len(parts) > 1 else ""
                    else:
                        authors = ""
                        venue = ""
                    
                    # Extract year
                    year_elem = paper.find('span', class_='gsc_a_y')
                    year = year_elem.text.strip() if year_elem else ""
                    
                    papers.append({
                        'title': title,
                        'authors': authors,
                        'venue': venue,
                        'year': year,
                        'link': link
                    })
            
            return papers
        else:
            print(f"Error: Status code {response.status_code}")
            return []
    except Exception as e:
        print(f"Error fetching data: {e}")
        return []

if __name__ == "__main__":
    print("Note: Google Scholar often requires JavaScript rendering.")
    print("For best results, use browser developer tools to extract data manually.")
    print("\nAlternatively, you can manually add papers to papers.js following the structure.")
    
    # This is a basic attempt - may not work due to JS requirements
    user_id = "hLBNWsYAAAAJ"
    papers = extract_papers_from_scholar(user_id)
    
    if papers:
        print(f"\nFound {len(papers)} papers")
        for i, paper in enumerate(papers, 1):
            print(f"\n{i}. {paper['title']}")
            print(f"   Authors: {paper['authors']}")
            print(f"   Venue: {paper['venue']}")
            print(f"   Year: {paper['year']}")
    else:
        print("\nCould not extract papers automatically.")
        print("Please manually extract papers from the Google Scholar page and add them to papers.js")
