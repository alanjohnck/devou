import React, { useState } from "react";

function FallbackImage({ src, alt, fallbackColor = "#ccc", fallbackSrc }) {
  const [error, setError] = useState(false);

  return (
    <>
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          style={{ width: "300px", height: "200px", objectFit: "cover" }}
        />
      ) : fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt="fallback"
          style={{ width: "300px", height: "200px", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: fallbackColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#555",
          }}
        >
          Image not available
        </div>
      )}
    </>
  );
}



export default FallbackImage;
