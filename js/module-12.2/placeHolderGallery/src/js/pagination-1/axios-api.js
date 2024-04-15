import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getAxiosPosts = async(pagePosts) => {
    try {
        const { data } = await axios.get('/posts', {
            params: {
                _page: pagePosts,
                _limit: 10
            }
        })
        return data
    } catch (err) {
        throw new Error(err)
    }
}