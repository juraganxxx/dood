import { useState } from 'react';
import Image from '../atoms/Image';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const [imageSrc, setImageSrc] = useState(video.single_img);

  const formatDuration = (length) => {
    const minutes = Math.floor(length / 60);
    const seconds = length % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleImageLoad = (event) => {
    const height = event.target.naturalHeight;

    if (height > 450) {
      setImageSrc(video.splash_img);
    }
  };

  return (
    <li className='pb-4'>
      <Link to={video.download_url}>
        <div className='relative'>
          <Image 
            src={imageSrc} 
            alt={video.title} 
            onLoad={handleImageLoad}
            className="object-cover h-[130px] w-full"
          />
          <div className='absolute bottom-0 left-0 right-0 flex justify-between items-center text-sm'>
            <p className='flex items-center gap-1 text-center bg-black text-white bg-opacity-60 rounded-r px-2'>
              <span>{video.views < 50 ? "New" : video.views}</span> 
              <ion-icon name="eye-outline"></ion-icon>
            </p>
            <p className='flex items-center gap-1 bg-black text-white bg-opacity-60 rounded-l px-2'>
              <ion-icon name="time-outline"></ion-icon> 
              {formatDuration(video.length)}
            </p>
          </div>
        </div>
        <h4 className='mt-2 text-sm font-semibold'>{video.title}</h4>
      </Link>
    </li>
  );
};

export default VideoCard;
