import React, { useEffect, useState } from 'react';

function Saved() {
  const [visions, setVisions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("visions") || "[]");
    setVisions(saved);
  }, []);

  return (
    <div>
      <h2>Saved Visions</h2>
      {visions.length === 0 ? (
        <p>No visions saved yet.</p>
      ) : (
        visions.map((v, idx) => (
          <div key={idx} style={{ marginBottom: '20px' }}>
            <p><strong>Prompt:</strong> {v.prompt}</p>
            <p><strong>Quote:</strong> {v.quote}</p>
            <img src={v.image} alt={`Vision ${idx}`} width="100%" />
          </div>
        ))
      )}
    </div>
  );
}

export default Saved;
