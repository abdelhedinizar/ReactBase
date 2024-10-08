import React, { useState } from "react";
import "./Favorise.css";

function Favorise({handleFavorise}) {
  const [isFavorised, setIsFavorised] = useState(false);

  const handleToggle = () => {
    handleFavorise();
    setIsFavorised(!isFavorised);
  };

  return (
    <div className="heart-icon" onClick={handleToggle}>
      {isFavorised ? (
        <i className="fas fa-heart full-heart fa-fade"></i>
      ) : (
        <i className="far fa-heart empty-heart fa-beat"></i>
      )}
    </div>
  );
}

export default Favorise;
