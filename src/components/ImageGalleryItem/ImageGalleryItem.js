import { Component } from "react";

import { ModalWindow } from "components/Modal/Modal";


export class ImageGalleryItem extends Component {

state = {
    isModalOpen: false,
}

openModal = () => {
    this.setState({
        isModalOpen: true,
    })
}

closeModal = () => {
    this.setState({
        isModalOpen: false,
    })
}

    render() {
        const {src, alt, largeImageURL} = this.props;
        const {isModalOpen} = this.state;
        return (
            <li onClick={this.openModal}>
              <img src={src} alt={alt} />
              {isModalOpen && <ModalWindow modalIsOpen={isModalOpen} closeModal={this.closeModal} largeImageURL={largeImageURL} alt={alt}/>}
            </li>
                )
    }
    
}