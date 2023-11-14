import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { fetchImages } from './API';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    error: false,
    loadMore: false,
  };

  async componentDidMount() {
    const { query, page } = this.state;
    try {
      this.setState({ loading: true, error: false });
      const initialImages = await fetchImages('nature', page);
      this.setState({
        images: initialImages.hits,
      });
    } catch (error) {
      this.setState({
        error: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true, error: false });
        const searchedImages = await fetchImages(query, page);
        if (searchedImages.hits.length === 0) {
          toast.error('Sorry, no more images available');
          this.setState({ loadMore: false });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...searchedImages.hits],
          loadMore: page < Math.ceil(searchedImages.totalHits / 12),
        }));
      } catch (err) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
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
    const { error, images, loading, loadMore } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {error && <p>Oops! Something went wrong! Please reload this page!</p>}
        <ImageGallery images={images} />
        {loadMore && <Button onClick={this.handleLoadMore} />}
        <Toaster />
      </div>
    );
  }
}
