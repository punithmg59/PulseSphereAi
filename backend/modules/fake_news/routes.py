from fastapi import APIRouter

from shared.models.schemas import FakeNewsResponse, TextRequest
from .controller import detect_fake_news

router = APIRouter()

@router.post('/', response_model=FakeNewsResponse)
def fake_news_endpoint(request: TextRequest):
    return detect_fake_news(request.text)
