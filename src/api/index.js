import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getVideos = async () => {
  try {
    const response = await axios.get(`${API_URL}/video`);
    console.log("data -> ", response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const getAccountStats = async (days) => {
//   try {
//     const response = await axios.get(`${API_URL}/account/stats?key=${API_KEY}&last=${days}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

