import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("currentPrompt", prompt);
    navigate("/vision");
  };

  return (
    <div>
      <h1>Welcome to DreamLens</h1>
      <p>Enter your dream, goal, or mood to generate inspiration.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={prompt}
          placeholder="e.g., I want to become a game developer"
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
        <button type="submit">Generate Inspiration</button>
      </form>
    </div>
  );
}

export default Home;
