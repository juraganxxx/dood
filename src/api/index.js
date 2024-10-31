
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

console.log("import ->", import.meta.env)

export const getVideos = async () => {
  try {
    const response = await axios.get(`${API_URL}/file/list?key=${API_KEY}`);
    console.log("data -> ", response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};
