// src/pages/HomePage.js
import { useEffect, useState } from 'react';
import MainLayout from '../templates/MainLayout';
import VideoContainer from '../organisms/VideoContainer';
import { getVideos } from '../../api';


const HomePage = () => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVideos();
        setFileList(response.result.files);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <MainLayout>
      <h3>Kawasan Jilbob</h3>
      <h1>Account Info</h1>
      {fileList.length > 0 ? (
        <VideoContainer fileList={fileList} />
      ) : (
        <p>No videos available.</p>
      )}
    </MainLayout>
  );
};

export default HomePage;
