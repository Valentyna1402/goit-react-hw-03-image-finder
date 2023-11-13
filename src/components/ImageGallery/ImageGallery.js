import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
    if (images.length > 0) {
        return (
            <ul>
              {images.map(({id, webformatURL, tags, largeImageURL}) => {
                return <ImageGalleryItem 
                key={id}
                src={webformatURL}
                alt={tags}
                largeImageURL={largeImageURL}
                />
              })}
            </ul>
          );
    }
    return <p>Sorry, we didn't find anything. Try another query.</p>
};
