import { useState } from 'react';
import MainLayout from '../templates/MainLayout';
import VideoContainer from '../organisms/VideoContainer';
import data from '../../data/fetchVideos';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const fileList = data.result.files;

  const filteredList = fileList.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
      <h3>Kawasan Jilbob</h3>
      <h1>Account Info</h1>
      {filteredList.length > 0 ? (
        <VideoContainer fileList={filteredList} />
      ) : (
        <p>No videos available.</p>
      )}
    </MainLayout>
  );
};

export default HomePage;
