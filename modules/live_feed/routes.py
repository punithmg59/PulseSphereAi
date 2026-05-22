from fastapi import APIRouter

from .service import get_alerts, get_feed, get_trending_topics

router = APIRouter(tags=["live-feed"])

@router.get("/feed")
def feed():
    return {"feed": get_feed(), "trending_topics": get_trending_topics()}

@router.get("/alerts")
def alerts():
    return {"alerts": get_alerts()}
