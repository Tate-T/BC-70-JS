import { getAllPosts } from './axios-api';

export const getPagesAmount = async () => {
  try {
    let data = await getAllPosts();
    return data.length;
  } catch (err) {
    throw new Error(err);
  }
};
