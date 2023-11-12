import axios from "axios";

const API_KEY = '39706932-7f7283177220c33d5b7c024e4';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data.hits;
}

// export const fetchImages = async () => {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const API_KEY = '39706932-7f7283177220c33d5b7c024e4';

//     const searchParams = new URLSearchParams({
//       key: `${API_KEY}`,
//       q: `${this.query}`,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: `${this.page}`,
//       per_page: 40,
//     });
//     try {
//       const response = await fetch(`${BASE_URL}?${searchParams}`);
//       const data = await response.json();
//       this.page += 1;
//       return data.hits;
//     } catch (error) {
//       console.log(error);
//     }
//   }