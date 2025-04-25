import React, { useEffect, useState } from 'react';

function Vision() {
  const [quote, setQuote] = useState("Loading...");
  const [image, setImage] = useState(null);
  const prompt = localStorage.getItem("currentPrompt");

  useEffect(() => {
    setTimeout(() => {
      setQuote("Dreams begin where determination starts.");
      setImage("https://via.placeholder.com/600x400?text=AI+Generated+Image");
    }, 2000);
  }, []);

  const saveVision = () => {
    const saved = JSON.parse(localStorage.getItem("visions") || "[]");
    const newVision = { prompt, quote, image };
    localStorage.setItem("visions", JSON.stringify([...saved, newVision]));
    alert("Vision saved!");
  };

  return (
    <div>
      <h2>Your AI Inspiration</h2>
      <p><strong>Prompt:</strong> {prompt}</p>
      <p><strong>Quote:</strong> {quote}</p>
      {image && <img src={image} alt="Generated vision" />}
      <button onClick={saveVision}>Save This Vision</button>
    </div>
  );
}

export default Vision;
