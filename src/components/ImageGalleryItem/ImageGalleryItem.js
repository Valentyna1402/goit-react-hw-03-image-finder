import { Modal } from "components/Modal/Modal"

export const ImageGalleryItem = ({src, alt, largeImageURL}) => {
    return (
        <li>
          <img src={src} alt={alt} />
          <Modal largeImageURL={largeImageURL} alt={alt}/>
        </li>
            )
}