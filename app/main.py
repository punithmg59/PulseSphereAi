import asyncio

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.routes import router
from backend.modules.live_feed.service import start_feed_task

app = FastAPI(
    title='PulseSphere AI Live Feed',
    description='Realtime live feed API for PulseSphere AI dashboard',
    version='0.1.0',
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(router)

@app.on_event('startup')
async def startup_event():
    app.state.live_feed_task = asyncio.create_task(start_feed_task())

@app.on_event('shutdown')
async def shutdown_event():
    task = getattr(app.state, 'live_feed_task', None)
    if task and not task.done():
        task.cancel()
