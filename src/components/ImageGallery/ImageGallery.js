import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({id, webformatURL, tags, largeImageURL}) => {
        return <ImageGalleryItem 
        key={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        />;
      })}
    </ul>
  );
};
