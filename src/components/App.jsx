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
  };

  async componentDidMount() {
    const { query, page } = this.state;
    try {
      this.setState({ loading: true, error: false,});
      const initialImages = await fetchImages(query, page);
      this.setState({
        images: initialImages,
      });
    } catch (error) {
      this.setState({
        error: true,
      });
    } finally {
      this.setState({ loading: false, });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true, error: false,});
        const searchedImages = await fetchImages(query, page);
        if (searchedImages.length === 0) {
          throw new Error();
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...searchedImages],
        }));
      } catch (err) { toast.error('Please reload this page!')
      } finally {
        this.setState({ loading: false, });
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
    const { error, images, loading } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {error && <p>Oops! Something went wrong! Please reload this page!</p>}
        <ImageGallery images={images} />
        <Button onClick={this.handleLoadMore} />
        <Toaster />
      </div>
    );
  }
}
