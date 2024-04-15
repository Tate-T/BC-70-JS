import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = async () => {
  try {
    const { data: posts } = await axios.get('/posts/');
    return posts;
  } catch (err) {
    throw new Error(err);
  }
};

export const getSomePosts = async page => {
  try {
    const { data: posts } = await axios.get('/posts/', {
      params: {
        _page: page,
        _limit: 10,
      },
    });
    return posts;
  } catch (err) {
    throw new Error(err);
  }
};
