import {
  MapPin,
  Bus,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";

export function Location() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Prime Location
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategically located with easy access to colleges,
            markets, and public transport
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57951.751554224065!2d92.73339902305833!3d24.79598522976926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49f3bdc2a643%3A0x99205e807ec43104!2sSilchar%20Medical%20College%20and%20Hospital!5e0!3m2!1sen!2sin!4v1767885628532!5m2!1sen!2sin"              
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PG Location Map"
            ></iframe>
          </div>

          {/* Nearby Places */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap
                    size={28}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    Nearby Colleges
                  </h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Engineering College - 1.5 km</li>
                    <li>• Medical College - 2 km</li>
                    <li>• Arts & Science College - 1 km</li>
                    <li>• Business School - 2.5 km</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Bus size={28} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    Public Transport
                  </h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Bus Stop - 200 meters</li>
                    <li>• Metro Station - 1 km</li>
                    <li>• Railway Station - 5 km</li>
                    <li>• Airport - 15 km</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <ShoppingBag
                    size={28}
                    className="text-orange-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    Shopping & Dining
                  </h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Supermarket - 300 meters</li>
                    <li>• Shopping Mall - 1.5 km</li>
                    <li>• Restaurants - 200 meters</li>
                    <li>• ATM - 100 meters</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <MapPin size={28} />
                <div>
                  <h3 className="text-xl mb-2">
                    Campus PG Address
                  </h3>
                  <p className="text-blue-100">
                    Sector 15, Near Engineering College,
                    <br />
                    University Road, City - 160001
                    <br />
                    Phone: +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}