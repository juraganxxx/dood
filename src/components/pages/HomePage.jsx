// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import MainLayout from '../templates/MainLayout';
import VideoContainer from '../organisms/VideoContainer';
import SortSelect from '../molecules/SortSelect';
import Pagination from '../molecules/Pagination';
import data from '../../data/fetchVideos';
import Telegram from '../atoms/Telegram';

const HomePage = () => {
  const [fileList, setFileList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setFileList(data.result.files);
  }, []);

  const sortVideos = (criteria) => {
    let sortedVideos = [...fileList];

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
  const currentItems = fileList.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(fileList.length / itemsPerPage);

  return (
    <MainLayout>
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
