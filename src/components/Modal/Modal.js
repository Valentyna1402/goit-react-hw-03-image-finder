export const Modal = ({largeImageURL, alt}) => {
    return (
        <div className="overlay">
        <div className="modal">
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>
            )
}