from fastapi import APIRouter

from shared.models.schemas import EmotionResponse, TextRequest
from .controller import analyze_emotion

router = APIRouter()

@router.post('/', response_model=EmotionResponse)
def emotion_endpoint(request: TextRequest):
    return analyze_emotion(request.text)
