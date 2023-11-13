import { Component } from 'react';

import { ModalWindow } from 'components/Modal/Modal';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { src, largeImageURL, alt } = this.props;

    return (
      <Item>
        <Image onClick={this.openModal} src={src} alt={alt} />
        <ModalWindow
          modalIsOpen={isModalOpen}
          closeModal={this.closeModal}
          largeImageURL={largeImageURL}
          alt={alt}
        />
      </Item>
    );
  }
}
