import { useEffect, useState } from "react";

function ActorImages({ personId }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/person/${personId}/images`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`, // Optional if you use the v4 token
            accept: "application/json"
          }
        });

        const data = await res.json();
        setImages(data.profiles || []);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      } finally {
        setLoading(false);
      }
    };

    if (personId) fetchImages();
  }, [personId]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
          alt={`Actor image ${idx + 1}`}
          className="rounded shadow-md"
        />
      ))}
    </div>
  );
}

export default ActorImages;
