function FallbackVideo({ src, fallbackColor = "#000", fallbackImage }) {
  const [error, setError] = useState(false);

  return (
    <>
      {!error ? (
        <video
          width="400"
          height="300"
          controls
          autoPlay
          muted
          loop
          onError={() => setError(true)}
          style={{ backgroundColor: fallbackColor }}
        >
          <source src={src} type="video/mp4" />
          Sorry, your browser does not support the video tag.
        </video>
      ) : fallbackImage ? (
        <img
          src={fallbackImage}
          alt="Video fallback"
          style={{ width: "400px", height: "300px", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "400px",
            height: "300px",
            backgroundColor: fallbackColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          Video not available
        </div>
      )}
    </>
  );
}