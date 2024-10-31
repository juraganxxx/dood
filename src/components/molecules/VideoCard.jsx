import Image from '../atoms/Image';
import Button from '../atoms/ButtonCard';

const VideoCard = ({ video }) => {
  return (
    <li>
      <Image src={video.single_img} alt={video.title} />
      <h4>{video.title}</h4>
      <p>Duration: {video.length}</p>
      <p>Views: {video.views}</p>
      <Button onClick={() => window.open(video.download_url)}>Download</Button>
    </li>
  );
};

export default VideoCard;
