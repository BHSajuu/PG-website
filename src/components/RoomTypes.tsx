import { Users, Wind, Thermometer, Check } from 'lucide-react';
import { useState } from 'react';
import { BookingModal } from './BookingModal';
import { rooms } from '@/lib/constants';



function RoomCard({ title, occupancy, acType, price, image, features, onBookNow }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
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

        <div className="mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600 mb-2">
              <Check size={16} className="text-green-600" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 flex items-center justify-between">
          <div>
            <span className="text-3xl text-gray-900">₹{price.toLocaleString()}</span>
            <span className="text-gray-600">/month</span>
          </div>
          <button 
            onClick={onBookNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Book Now
          </button>
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

  const handleBookNow = (title: string, price: number, acType: string) => {
    setSelectedRoom({ title, price, type: acType });
    setModalOpen(true);
  };

  

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Choose Your Room
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our variety of room options designed for your comfort and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard 
              key={index} 
              {...room}
              onBookNow={() => handleBookNow(room.title, room.price, room.acType)}
            />
          ))}
        </div>
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