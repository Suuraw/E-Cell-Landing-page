import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/hero-section')
      .then(response => {
        setHeroData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching hero section:', error);
        setError('Failed to load hero section data.');
      });
  }, []);

  if (error) return <p className="text-red-500">{error}</p>; 
  if (!heroData) return <p>Loading...</p>; 

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
      >
        {heroData.headline} 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          {heroData.highlight} 
        </span>
      </motion.h1>

      <motion.p
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
        transition={{ delay: 0.2 }}
      >
        {heroData.description} 
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Let’s build the future together!
        </span>
      </motion.p>

      <motion.div
        className="flex justify-center my-10"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/register" 
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          {heroData.ctaLabel}
        </Link>
      </motion.div>

      <div className="flex mt-10 justify-center">
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
          transition={{ delay: 0.6 }}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
          transition={{ delay: 0.8 }}
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
};

export default HeroSection;