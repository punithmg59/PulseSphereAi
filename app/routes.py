from fastapi import APIRouter

from backend.modules.live_feed.routes import router as live_router

router = APIRouter()
router.include_router(live_router)
