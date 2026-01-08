import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen min-h-150 flex items-center justify-center">
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
        <h1 className="text-5xl md:text-7xl mb-6">
          Welcome to Campus PG
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Your Home Away From Home - Premium Student Accommodation
        </p>
        <button 
          onClick={scrollToRooms}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Explore Rooms
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
}
