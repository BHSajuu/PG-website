"use client";

import { facilities } from "@/lib/constants";
import { UtensilsCrossed, Wifi } from "lucide-react";
import { useRef, useEffect } from "react";


function FacilityCard({ icon, title, description }: FacilityCardProps) {
  return (
    // Added h-full to ensure cards have equal height in the slider
    <div className="h-full w-93 md:w-auto bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl mb-2 text-gray-900">{title}</h3>
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
      // Only run if the content is actually scrollable (mobile view)
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        const cardWidth = scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        // Calculate next position
        let nextScroll = currentScroll + cardWidth;
        
        // Loop back to start if we are at the end
        if (nextScroll > maxScroll + 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollTo({ left: nextScroll, behavior: 'smooth' });
        }
      }
    };

    const intervalId = setInterval(autoScroll, 3000); // Scrolls every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="facilities" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience premium amenities designed for modern student living
          </p>
        </div>

        {/* Featured Facilities with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <UtensilsCrossed size={32} className="text-orange-600" />
                  <h3 className="text-2xl text-gray-900">Delicious & Nutritious Meals</h3>
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
              <div className="h-64 md:h-auto">
                <img 
                  src="meal.jpg"
                  alt="Healthy Meals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden flex md:col-span-2 flex-col md:flex-row">
            <div className="h-76 md:h-110">
                <img 
                  src="wifi.jpg"
                  alt="Healthy Meals"
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="px-16 py-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Wifi size={32} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900">Blazing Fast WiFi</h3>
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
          </div>
        </div>

        {/* All Facilities Grid - Updated for Mobile Slider */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0 hide-scrollbar"
        >
          {facilities.map((facility, index) => (
            <div key={index} className="min-w-full mb-2 md:min-w-0 snap-center shrink-0 md:shrink">
              <FacilityCard {...facility} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}