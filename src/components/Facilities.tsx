import { facilities } from "@/lib/constants";
import { UtensilsCrossed, Wifi } from "lucide-react";


function FacilityCard({ icon, title, description }: FacilityCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Facilities() {

  return (
    <section className="py-20 bg-white">
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
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
            <div className="p-8">
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

          <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden">
            <div className="h-full">
              <img 
                  src="food.jpg"
                alt="Food Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

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
        </div>

        {/* All Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
