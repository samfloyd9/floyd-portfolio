import { useState } from "react";
import searchImages from "../api/picturesapi";
import ImageList from "../components/pictures/ImageList";
import SearchBar from "../components/pictures/SearchBar";

function PicturesPage() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
      <div className="flex justify-center items-center content-center flex-col w-2/3 mx-auto">
        <div className="border border-1 rounded-md border-gray-200 border-solid px-14 py-10 flex flex-col justify-center shadow-lg gap-2">
          <SearchBar onSubmit={handleSubmit} />
          <ImageList images={images} />
        </div>
      </div>
  );
}

export default PicturesPage;
