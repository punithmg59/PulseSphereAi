from fastapi import APIRouter

from modules.emotion_analysis.routes import router as emotion_router
from modules.crisis_prediction.routes import router as crisis_router
from modules.fake_news.routes import router as fake_news_router

router = APIRouter()
router.include_router(emotion_router, prefix='/emotion', tags=['Emotion'])
router.include_router(crisis_router, prefix='/crisis', tags=['Crisis'])
router.include_router(fake_news_router, prefix='/fake-news', tags=['Fake News'])
