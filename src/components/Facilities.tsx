"use client";

import { facilities } from "@/lib/constants";
import { UtensilsCrossed, Wifi } from "lucide-react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";


function FacilityCard({ icon, title, description }: FacilityCardProps) {
  return (
    <div className="h-full w-76 md:w-auto bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="text-blue-600 mb-4 transform transition-transform duration-300 hover:scale-110 inline-block">
        {icon}
      </div>
      <h3 className="text-xl mb-2 text-gray-900 font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Facilities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality for mobile
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

  return (
    <section id="facilities" className="py-13 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience premium amenities designed for modern student living
          </p>
        </motion.div>

        {/* Featured Facilities with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Meal Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden md:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <UtensilsCrossed size={32} className="text-orange-600" />
                  <h3 className="text-2xl text-gray-900 font-semibold">Delicious & Nutritious Meals</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Enjoy home-style cooking with fresh ingredients. Our menu is carefully planned to provide balanced nutrition.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 3 Meals a day (Breakfast, Lunch, Dinner)</li>
                  <li>• Vegetarian & Non-vegetarian options</li>
                  <li>• Hygienic kitchen with modern equipment</li>
                  <li>• Special meals on festivals</li>
                </ul>
              </div>
              <div className="h-64 md:h-auto overflow-hidden">
                <img 
                  src="meal.jpg"
                  alt="Healthy Meals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Wifi Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden flex md:col-span-2 flex-col md:flex-row"
          >
            <div className="h-76 md:h-110 overflow-hidden md:w-1/2">
                <img 
                  src="wifi.jpg"
                  alt="High Speed Wifi"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="px-16 py-8 flex flex-col justify-center md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Wifi size={32} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900 font-semibold">Blazing Fast WiFi</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Stay connected with our high-speed fiber optic internet connection. Perfect for online classes, streaming, and gaming.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 100 Mbps speed</li>
                <li>• Unlimited data</li>
                <li>• Coverage in all rooms</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* All Facilities Grid */}
        <motion.div 
          ref={scrollRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-5 pt-5 pb-4  "
        >
          {facilities.map((facility, index) => (
            <div key={index} className="min-w-full mb-2 md:min-w-0 snap-center shrink-0 md:shrink">
              <FacilityCard {...facility} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}