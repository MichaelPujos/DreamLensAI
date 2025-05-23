# DreamLens AI

**DreamLens** is a mobile-first, AI-powered React web app that lets users input their dreams, moods, or goals and generates motivational quotes and matching AI images.  
Users can also save their inspirations to view later — a true digital vision board for personal growth.

---

## 📱 App Features

- Enter your dream, mood, or goal
- AI-generated motivational advice (powered by OpenAI)
- AI-generated inspirational images (powered by DALL·E API)
- Save generated "visions" locally
- Mobile-first, responsive modern design
- Smooth navigation between Home, Vision Generator, and Saved pages

---

## 🚀 Technologies Used

| Tool/Tech | Purpose |
|-----------|---------|
| **React.js** | Web framework for building the app |
| **React Router** | Navigation between pages |
| **OpenAI API (GPT-4 + DALL·E)** | AI-powered text and image generation |
| **localStorage** | Save user-generated visions |
| **HTML/CSS (mobile-first)** | Clean, responsive layout |
| **GitHub + Vercel (planned)** | Hosting and version control |

---

## 🧠 AI Integration Details

- **Text generation**: GPT-4 generates personalized motivational quotes based on user input.
- **Image generation**: DALL·E creates a unique visual "vision board" image inspired by the user's dream/mood.

> **Note**: During initial stages, fake placeholder data simulates real API behavior until actual keys are added.

---

## 📂 Project Structure

```bash
dreamlens-ai/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── components/
│       ├── Home.js
│       ├── Vision.js
│       ├── Saved.js
└── README.md
