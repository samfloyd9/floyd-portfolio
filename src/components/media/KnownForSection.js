import { useEffect, useState } from "react";
import { getKnownForCredits } from "../../api/tmdbapi";

const KnownForSection = ({ personId, setSelectedMedia }) => {
  const [knownFor, setKnownFor] = useState([]);
  const [toggleKnownFor, setToggleKnownFor] = useState(true);

  useEffect(() => {
    const fetchKnownFor = async () => {
      const credits = await getKnownForCredits(personId);

      const sorted = credits
        .filter((item) => {
          const isGoodPoster = item.poster_path;
          const isNotTalkShow = !["Talk", "News"].includes(item.genre_ids?.[0]); // sometimes genre ID 10767 is "Talk Show"
          const hasRealCharacter =
            item.character &&
            item.character.length > 1 &&
            !item.character.toLowerCase().includes("self");

          return isGoodPoster && isNotTalkShow && hasRealCharacter;
        })
        .sort((a, b) => b.popularity - a.popularity);
      // .slice(0, 6);

      setKnownFor(sorted);
    };

    if (personId) fetchKnownFor();
  }, [personId]);

  const handleKnownForSection = () => {
    setToggleKnownFor(!toggleKnownFor);
  };

  return (
    <div className="mt-6 w-full">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">Known For</h2>
        <button
          className="px-1.5 bg-gray-300 text-black rounded hover:bg-gray-400"
          onClick={handleKnownForSection}
        >
          {toggleKnownFor ? "Close" : "Open"}
        </button>
      </div>
      {toggleKnownFor && (
        <div className="flex flex-wrap gap-4">
          {knownFor.map((item) => (
            <div key={item.id} className="w-[120px] text-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                alt={item.title || item.name}
                className="rounded-md shadow-md mb-1 cursor-pointer"
                onClick={() =>
                  setSelectedMedia({
                    id: item.id,
                    media_type: item.media_type,
                  })
                }
              />
              <p className="text-sm font-semibold truncate">
                {item.title || item.name}
              </p>
              <p className="text-xs text-gray-500">
                {item.character && `as ${item.character}`}
              </p>
              <p className="text-xs text-gray-400">
                {(item.release_date || item.first_air_date || "").slice(0, 4)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KnownForSection;
