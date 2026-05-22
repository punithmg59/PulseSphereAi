from transformers import pipeline

FAKE_NEWS_LABELS = ['misinformation', 'accurate']

FAKE_NEWS_PIPELINE = pipeline(
    'zero-shot-classification',
    model='facebook/bart-large-mnli',
    device=-1,
)


def analyze_fake_news(text: str) -> dict:
    if not text:
        return {'fake_probability': 0}

    prediction = FAKE_NEWS_PIPELINE(
        text,
        candidate_labels=FAKE_NEWS_LABELS,
        multi_label=False,
    )

    scores = dict(zip(prediction['labels'], prediction['scores']))
    fake_score = scores.get('misinformation', 0.0)
    return {'fake_probability': int(fake_score * 100)}
