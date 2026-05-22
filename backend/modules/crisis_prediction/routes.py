from fastapi import APIRouter

from shared.models.schemas import CrisisResponse, TextRequest
from .controller import evaluate_crisis

router = APIRouter()

@router.post('/', response_model=CrisisResponse)
def crisis_endpoint(request: TextRequest):
    return evaluate_crisis(request.text)
