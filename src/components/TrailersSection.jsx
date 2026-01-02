import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  const [play, setPlay] = useState(false); // track if video should play

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      <div className='relative mt-6'>
        <BlurCircle top='-100px' right='-100px' />
        <ReactPlayer
  url={currentTrailer.videoUrl}  // video URL
  controls
  playing={true}                // autoplay immediately
  muted={false}                  // sound on
  className="mx-auto max-w-full"
  width="960px"
  height="540px"
/>

      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {dummyTrailers.map((trailer, i) => (
          <img
            key={i}
            src={trailer.image}
            alt="Trailer thumbnail"
            className={`w-40 rounded-xl cursor-pointer transition-all duration-300 ${
              currentTrailer.videoUrl === trailer.videoUrl ? 'ring-4 ring-blue-500' : ''
            }`}
            onClick={() => {
              setCurrentTrailer(trailer);
              setPlay(false); // reset play so thumbnail shows for new trailer
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
