# PulseSphere AI

PulseSphere AI is a real-time AI-powered crisis intelligence platform that analyzes Reddit discussions using emotional intelligence, fake news detection, and crisis prediction.

The platform automatically fetches Reddit posts and uses AI to detect:

* fear
* anger
* panic
* misinformation
* crisis risk

Users can click any news/discussion post to view deep AI analysis with graphs, risk scores, and recommendations.

---

# Features

## Real-Time Reddit Monitoring

Automatically fetches trending Reddit discussions and news posts.

## Emotion Analysis

Detects emotions like:

* Fear
* Anger
* Sadness
* Trust
* Panic

using HuggingFace Transformers.

## Crisis Prediction

Predicts crisis probability using emotional intensity and misinformation analysis.

## Fake News Detection

Uses Llama 3 through Groq API to identify misinformation and risky narratives.

## AI Recommendations

Generates AI-powered response suggestions and communication strategies.

## Interactive Analysis Dashboard

Displays:

* emotion graphs
* risk meters
* fake news probability
* AI summaries
* recommendations

---

# Tech Stack

## Frontend

* React + Vite
* TailwindCSS
* Axios
* Recharts
* Framer Motion

## Backend

* FastAPI
* Python

## AI

* HuggingFace Transformers
* Groq API
* Llama 3

---

# AI Models

## Emotion Analysis Model

j-hartmann/emotion-english-distilroberta-base

## LLM Model

llama3-70b-8192

---

# Project Structure

```bash
frontend/
backend/
```

---

# Frontend Structure

```bash
frontend/src/
├── pages/
├── components/
├── services/
```

---

# Backend Structure

```bash
backend/
├── app/
├── modules/
├── requirements.txt
└── .env
```

---

# API Endpoints

## Reddit Feed

```bash
GET /reddit/news
```

## Emotion Analysis

```bash
POST /emotion/analyze
```

## Fake News Detection

```bash
POST /fake-news/analyze
```

## Crisis Prediction

```bash
POST /crisis/predict
```

## AI Recommendation

```bash
POST /recommendation/generate
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/PulseSphere-AI.git
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

# Environment Variables

Create `.env`

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# Future Improvements

* Live Twitter/X integration
* Multi-language emotion analysis
* AI trend forecasting
* Regional heatmaps
* Bot detection
* Real-time alerts

---

# Inspiration

Inspired by:

* AI intelligence systems
* cybersecurity monitoring platforms
* real-time crisis analytics
* emotional intelligence AI

---

# Built For

Hackathon Project 🚀
