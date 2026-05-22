from pydantic import BaseModel


class TextRequest(BaseModel):
    text: str


class EmotionResponse(BaseModel):
    anger: int
    fear: int
    trust: int
    optimism: int
    panic: int
    frustration: int


class FakeNewsResponse(BaseModel):
    fake_probability: int


class CrisisResponse(BaseModel):
    risk: int
    level: str
