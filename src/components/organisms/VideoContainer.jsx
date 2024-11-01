// src/components/organisms/VideoContainer.js
import VideoCard from '../molecules/VideoCard';

const VideoContainer = ({ fileList }) => {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {fileList.map((file) => (
        <VideoCard key={file.file_code} video={file} />
      ))}
    </ul>
  );
};

export default VideoContainer;
