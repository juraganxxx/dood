import Image from '../atoms/Image';
import Button from '../atoms/ButtonCard';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  
  const formatDuration = (length) => {
    const minutes = Math.floor(length / 60);
    const seconds = length % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Menampilkan detik dengan leading zero
  };
  return (
    <li className=''>
      <Link to={video.download_url} >
        <div classname="rounded h-64">
          <Image src={video.single_img} alt={video.title} className=" object-cover rounded-xl" />
        </div>
        <h4>{video.title}</h4>
        <p>Duration: {formatDuration(video.length)}</p>
        <p>Views: {video.views}</p>
      </Link>
    </li>
  );
};

export default VideoCard;
