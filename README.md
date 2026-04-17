# 🍳 Recipe Extractor

A full-stack application that extracts structured recipe data (ingredients, instructions, timings, and more) from any recipe URL.

---

## 🚀 Overview

Recipe Extractor transforms unstructured recipe webpages into clean, structured JSON data.
It combines web scraping with intelligent parsing to deliver usable cooking information in seconds.

---

## ✨ Features

* 🔗 Extract recipe data from any URL
* 🧠 Intelligent parsing of ingredients & instructions
* 📋 Structured output (JSON format)
* 🧾 Interactive UI for viewing recipes
* 🕘 History tracking (optional extension-ready)
* ⚡ Fast API backend with real-time processing

---

## 🏗️ Tech Stack

### Backend

* FastAPI
* BeautifulSoup (HTML parsing)
* Python

### Frontend

* React (Vite)
* Axios

### Others

* REST API architecture
* JSON-based data handling

---

## 📸 Demo

Paste a recipe URL → Get structured output instantly.

Example:

```
Input:
https://www.bbcgoodfood.com/recipes/classic-pancakes

Output:
- Ingredients
- Step-by-step instructions
- Prep & cook time
- Servings & difficulty
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/recipe-extractor.git
cd recipe-extractor
```

---

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔌 API Endpoint

### Extract Recipe

**POST** `/extract`

#### Request Body:

```json
{
  "url": "https://example.com/recipe"
}
```

#### Response:

```json
{
  "title": "Extracted Recipe",
  "ingredients": [...],
  "instructions": [...],
  "prep_time": "10 mins",
  "cook_time": "15 mins"
}
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend:

```
GEMINI_API_KEY=your_api_key_here
```

> ⚠️ Never commit API keys to GitHub.

---

## 📁 Project Structure

```
recipe_app/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── services/
│   │   ├── db/
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
│
└── README.md
```

---

## 🧠 How It Works

1. User submits a recipe URL
2. Backend fetches webpage content
3. HTML is cleaned and parsed
4. Data is structured using parsing logic / LLM
5. JSON response is returned
6. Frontend displays formatted recipe

---

## 🚧 Limitations

* Some websites may block scraping (HTTP 403/402)
* Parsing accuracy depends on page structure
* Advanced NLP extraction can be improved further

---

## 🔮 Future Improvements

* ✅ Better ingredient parsing (quantities & units)
* 🛒 Auto shopping list generation
* 📱 Mobile-friendly UI
* ☁️ Deployment (Vercel + Render)
* 🤖 Enhanced LLM integration

---

## 🤝 Contributing

Contributions are welcome. Feel free to fork and improve the project.

---

## 📄 License

MIT License

---

## 💡 Author

Built as a full-stack project demonstrating:

* API design
* Web scraping
* Frontend-backend integration

---
