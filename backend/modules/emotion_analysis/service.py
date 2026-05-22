from transformers import pipeline

from app.config import EMOTION_LABELS

EMOTION_PIPELINE = pipeline(
    'zero-shot-classification',
    model='facebook/bart-large-mnli',
    device=-1,
)


def analyze_emotions(text: str) -> dict:
    if not text:
        return {label: 0 for label in EMOTION_LABELS}

    prediction = EMOTION_PIPELINE(
        text,
        candidate_labels=EMOTION_LABELS,
        multi_label=True,
    )

    scores = {label: 0 for label in EMOTION_LABELS}
    for label, score in zip(prediction['labels'], prediction['scores']):
        scores[label] = int(score * 100)

    return scores
