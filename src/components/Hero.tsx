"use client";

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
        backgroundImage: "url('/lanbg.jpg')"
     }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 font-bold">
            Welcome to Campus PG
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your Home Away From Home - Premium Student Accommodation
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToRooms}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            Explore Rooms
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </div>
    </div>
  );
}