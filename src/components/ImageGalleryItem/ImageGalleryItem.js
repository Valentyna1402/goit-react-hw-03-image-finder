import { Component } from "react";

import { ModalWindow } from "components/Modal/Modal";
import { Item, Image } from "./ImageGalleryItem.styled";


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
            <Item onClick={this.openModal}>
              <Image src={src} alt={alt} />
              {isModalOpen && <ModalWindow modalIsOpen={isModalOpen} closeModal={this.closeModal} largeImageURL={largeImageURL} alt={alt}/>}
            </Item>
                )
    }
    
}