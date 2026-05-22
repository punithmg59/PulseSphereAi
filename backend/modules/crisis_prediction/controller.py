from .service import predict_crisis


def evaluate_crisis(text: str) -> dict:
    return predict_crisis(text)
