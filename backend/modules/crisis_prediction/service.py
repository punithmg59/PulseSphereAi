from app.config import ESCALATION_KEYWORDS
from modules.emotion_analysis.service import analyze_emotions
from modules.fake_news.service import analyze_fake_news


def compute_keyword_escalation(text: str) -> int:
    normalized = text.lower()
    count = sum(normalized.count(keyword) for keyword in ESCALATION_KEYWORDS)
    return min(100, count * 15)


def predict_crisis(text: str) -> dict:
    emotions = analyze_emotions(text)
    misinformation = analyze_fake_news(text)['fake_probability']
    escalation = compute_keyword_escalation(text)

    threat_intensity = max(
        emotions.get('anger', 0),
        emotions.get('fear', 0),
        emotions.get('panic', 0),
        emotions.get('frustration', 0),
    )

    safety_score = ((100 - emotions.get('trust', 0)) * 0.2) + ((100 - emotions.get('optimism', 0)) * 0.1)
    emotion_risk = int(threat_intensity * 0.5 + safety_score)
    risk = min(100, int(emotion_risk * 0.4 + misinformation * 0.35 + escalation * 0.25))

    if risk >= 70:
        level = 'HIGH'
    elif risk >= 40:
        level = 'MEDIUM'
    else:
        level = 'LOW'

    return {'risk': risk, 'level': level}
