import asyncio
from collections import Counter, deque
from datetime import datetime
from itertools import cycle

from .dummy_data import ALERT_PATTERNS, FAKE_POSTS, TRENDING_TOPICS

feed_queue = deque(maxlen=20)
alert_queue = deque(maxlen=5)
trend_counts = Counter()
post_cycle = cycle(FAKE_POSTS)
static_trends = TRENDING_TOPICS


def format_post(message: str):
    return {
        "id": f"{int(datetime.utcnow().timestamp())}-{abs(hash(message)) % 1000}",
        "message": message,
        "severity": "high",
        "timestamp": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
    }


def create_alert(message: str):
    normalized = message.lower()
    for keyword, alert_text in ALERT_PATTERNS.items():
        if keyword in normalized:
            return {
                "id": f"alert-{abs(hash(message)) % 10000}",
                "message": alert_text,
                "severity": "critical",
                "timestamp": datetime.utcnow().strftime("%H:%M:%S UTC"),
            }
    return None


def record_trends(message: str):
    words = [word.strip(".,").title() for word in message.split() if len(word) > 3]
    trend_counts.update(words)


def append_post():
    message = next(post_cycle)
    entry = format_post(message)
    feed_queue.appendleft(entry)

    if alert := create_alert(message):
        alert_queue.appendleft(alert)
    record_trends(message)


def get_feed():
    return list(feed_queue)


def get_alerts():
    return list(alert_queue)


def get_trending_topics():
    trending = [topic for topic, _ in trend_counts.most_common(5)]
    if len(trending) < 5:
        trending = list(dict.fromkeys(trending + static_trends))[:5]
    return [{"topic": item, "activity": max(10, min(100, trend_counts[item] * 12))} for item in trending]


async def start_feed_task():
    if not feed_queue:
        for _ in range(3):
            append_post()
    while True:
        await asyncio.sleep(2)
        append_post()
