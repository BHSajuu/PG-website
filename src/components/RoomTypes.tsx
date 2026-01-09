"use client";

import { Users, Wind, Thermometer, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { BookingModal } from './BookingModal';
import { rooms } from '@/lib/constants';
import { motion } from 'framer-motion';


function RoomCard({ title, occupancy, acType, price, image, features, onBookNow }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
      <div className="h-64 overflow-hidden shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl text-gray-900">{title}</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={20} />
            <span>{occupancy}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          {acType === 'AC' ? (
            <div className="flex items-center gap-2 text-blue-600">
              <Wind size={20} />
              <span>Air Conditioned</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-green-600">
              <Thermometer size={20} />
              <span>Non-AC</span>
            </div>
          )}
        </div>

        <div className="mb-4 grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600 mb-2">
              <Check size={16} className="text-green-600" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 flex items-center justify-between mt-auto">
          <div>
            <span className="text-3xl text-gray-900 font-bold">₹{price.toLocaleString()}</span>
            <span className="text-gray-600">/month</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors shadow-md"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export function RoomTypes() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<{
    title: string;
    price: number;
    type: string;
  } | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        const cardWidth = scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        let nextScroll = currentScroll + cardWidth;
        
        if (nextScroll > maxScroll + 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollTo({ left: nextScroll, behavior: 'smooth' });
        }
      }
    };

    const intervalId = setInterval(autoScroll, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleBookNow = (title: string, price: number, acType: string) => {
    setSelectedRoom({ title, price, type: acType });
    setModalOpen(true);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2 } }
  };

  return (
    <section id="rooms" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">
            Choose Your Room
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our variety of room options designed for your comfort and budget
          </p>
        </motion.div>

        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x md:snap-none pb-4 md:pb-0 hide-scrollbar"        
          >
          {rooms.map((room, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="w-full md:w-auto mb-5 md:mb-0 snap-center shrink-0 md:shrink-0 h-full"
            >
              <RoomCard 
                {...room}
                onBookNow={() => handleBookNow(room.title, room.price, room.acType)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedRoom && (
        <BookingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          roomTitle={selectedRoom.title}
          roomPrice={selectedRoom.price}
          roomType={selectedRoom.type}
        />
      )}
    </section>
  );
}