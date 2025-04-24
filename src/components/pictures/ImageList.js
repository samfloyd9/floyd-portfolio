import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
    <div className="columns-3 md:columns-4 lg:columns-6 space-y-2.5">
      {renderedImages}
    </div>
  );
}

export default ImageList;
