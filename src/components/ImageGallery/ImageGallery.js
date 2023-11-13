import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
    if (images.length > 0) {
        return (
            <List>
              {images.map(({id, webformatURL, tags, largeImageURL}) => {
                return <ImageGalleryItem 
                key={id}
                src={webformatURL}
                alt={tags}
                largeImageURL={largeImageURL}
                />
              })}
            </List>
          );
    }
    return <p>Sorry, we didn't find anything. Try another query.</p>
};
