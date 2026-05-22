from .service import analyze_emotions


def analyze_emotion(text: str) -> dict:
    return analyze_emotions(text)
