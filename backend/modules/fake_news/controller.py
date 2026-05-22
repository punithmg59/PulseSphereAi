from .service import analyze_fake_news


def detect_fake_news(text: str) -> dict:
    return analyze_fake_news(text)
