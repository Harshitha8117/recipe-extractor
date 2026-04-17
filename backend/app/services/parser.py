def clean_text(text: str):
    text = " ".join(text.split())
    return text[:12000]  # prevent token overflow