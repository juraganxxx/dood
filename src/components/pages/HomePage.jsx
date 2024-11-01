// src/pages/HomePage.js
import { useState, useEffect } from 'react';
import MainLayout from '../templates/MainLayout';
import VideoContainer from '../organisms/VideoContainer';
import SortSelect from '../molecules/SortSelect';
import Pagination from '../molecules/Pagination';
import data from '../../data/fetchVideos';
import Telegram from '../atoms/Telegram';

const HomePage = () => {
  const [fileList, setFileList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 8;

  useEffect(() => {
    setFileList(data.result.files);
  }, []);

  // Filter video berdasarkan searchTerm
  const filteredFileList = fileList.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortVideos = (criteria) => {
    let sortedVideos = [...filteredFileList]; // Gunakan filteredFileList

    if (criteria === 'popular') {
      sortedVideos.sort((a, b) => b.views - a.views);
    } else if (criteria === 'latest') {
      sortedVideos.sort((a, b) => new Date(b.uploaded) - new Date(a.uploaded));
    } else if (criteria === 'oldest') {
      sortedVideos.sort((a, b) => new Date(a.uploaded) - new Date(b.uploaded));
    }

    setFileList(sortedVideos);
  };

  const handleSortChange = (event) => {
    sortVideos(event.target.value);
  };

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFileList.slice(indexOfFirstItem, indexOfLastItem); // Gunakan filteredFileList

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredFileList.length / itemsPerPage); // Gunakan filteredFileList

  return (
    <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
      <div className="flex justify-between items-center my-2">
        <SortSelect onSortChange={handleSortChange} />
        <Telegram />
      </div>
      {currentItems.length > 0 ? (
        <>
          <VideoContainer fileList={currentItems} />
          <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
        </>
      ) : (
        <p>No videos available.</p>
      )}
    </MainLayout>
  );
};


export default HomePage;
