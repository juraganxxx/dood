// src/components/organisms/VideoContainer.js
import VideoCard from '../molecules/VideoCard';

const VideoContainer = ({ fileList }) => {
  return (
    <ul>
      {fileList.map((file) => (
        <VideoCard key={file.file_code} video={file} />
      ))}
    </ul>
  );
};

export default VideoContainer;
