import React from 'react';
import { Component } from 'react';

import { fetchImages } from './API';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    query: '',
    page: 1,
  };

  async componentDidMount() {
    try {
      const initialImages = await fetchImages();
      this.setState({
        images: initialImages,
      });
    } catch (error) {}
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        const searchedImages = await fetchImages(query, page);
        this.setState({
          images: searchedImages,
        });
      } catch (error) {}
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: newQuery,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { query, images } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />

        <button></button>
      </div>
    );
  }
}
