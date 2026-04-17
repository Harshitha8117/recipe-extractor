import requests
from bs4 import BeautifulSoup

def scrape_website(url: str):
    session = requests.Session()

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept": "text/html,application/xhtml+xml",
        "Connection": "keep-alive"
    }

    res = session.get(url, headers=headers, timeout=10)

    if res.status_code != 200:
        raise Exception(f"Blocked by site. Status: {res.status_code}")

    soup = BeautifulSoup(res.text, "html.parser")

    for tag in soup(["script", "style"]):
        tag.decompose()

    return soup.get_text(separator=" ")