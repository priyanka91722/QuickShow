import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/backgroundImage.png')` }}
    >
      {/* Logo */}
      <img
        src="/marvelLogo.svg"
        alt="Marvel Logo"
        className="max-h-20 lg:h-11 mt-20 md:mt-24"
      />

      {/* Title */}
      <h1 className="text-5xl md:text-[70px] leading-tight font-semibold max-w-[28rem] text-white">
        Guardians <br /> of the Galaxy
      </h1>

      {/* Genre / Year / Duration */}
      <div className="flex items-center gap-6 text-gray-200 mt-4">
        <span>Action | Adventure | Sci-Fi</span>

        <div className="flex items-center gap-1">
          <Calendar className="w-5 h-5" />
          <span>2018</span>
        </div>

        <div className="flex items-center gap-1">
          <Clock className="w-5 h-5" />
          <span>2h 8m</span>
        </div>
      </div>
      <p className='max-w-md text-gray-300'>In a post-apocalyptic world where 
        cities ride on wheels and consume each other to survive, two people meet in
        London and try to stop a conspiracy
      </p>
      <button onClick = {()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary
      hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore Movies
        <ArrowRight className="w-5 h-5"/>
        </button>
    </div>
  );
};

export default HeroSection;
