import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import router

app = FastAPI(
    title='PulseSphere AI Intelligence Engine',
    description='FastAPI backend for emotion analysis, crisis prediction, and fake news detection.',
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(router)

@app.get('/')
def health_check():
    return {'status': 'PulseSphere AI backend is running'}
