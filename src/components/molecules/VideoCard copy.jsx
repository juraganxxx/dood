import Image from '../atoms/Image';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  
  const formatDuration = (length) => {
    const minutes = Math.floor(length / 60);
    const seconds = length % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Menampilkan detik dengan leading zero
  };

  return (
    <li className='pb-4'>
      <Link to={video.download_url}>
        <div className='relative'>
        <div className='w-full h-[230px] overflow-hidden'> {/* Kontainer untuk menjaga rasio gambar */}
            <Image 
              src={video.single_img} 
              alt={video.title} 
              className="object-cover w-full h-full transition-transform duration-200 ease-in-out transform hover:scale-105 rounded-xl" // Efek zoom saat hover
            />
          </div>
          <div className='absolute bottom-0 left-0 right-0 flex justify-between items-center text-sm'>
            <p className='flex items-center gap-1 text-center bg-black text-white bg-opacity-60 rounded-r px-2'>
              <span>{video.views < 50 ? "New" : video.views}</span> 
              <ion-icon name="eye-outline"></ion-icon>
            </p>
            <p className='flex items-center gap-1 text-center bg-black text-white bg-opacity-60 rounded-r px-2'>
              <ion-icon name="time-outline"></ion-icon> 
              <span>{formatDuration(video.length)}</span>
            </p>
          </div>
        </div>
        <h4 className='mt-2 text-sm font-semibold'>{video.title}</h4>
      </Link>
    </li>
  );
};

export default VideoCard;
