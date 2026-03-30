import React from 'react';
import Navbar from '../components/Navbar';
import { MapPin, Car, Hotel } from 'lucide-react';

const Story = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            How To Come And Where To Stay
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A few practical details to help you plan your time with us
          </p>
        </div>
      </div>

      {/* Venue Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Venue Information
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-pale-yellow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div
                  className="w-full h-full min-h-[300px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/Venue.png)`,
                  }}
                />
              </div>

              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Frà Viaco AgriResort
                </h3>

                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-pale-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-black">Address:</p>
                    <p className="text-black">
                      Localita' Mezzano, 01018 Valentano VT, Italy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <Car className="w-5 h-5 text-pale-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-black">Parking Information:</p>
                    <p className="text-black">
                      Parking is available at the entrance of the venue.
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-black">
                    Our venue is surrounded by nature, overlooking the volcanic Lake of Mezzano, with grassy fields and olive and oak trees all around. 
                    If the weather allows, the whole celebration will take place outdoors.
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/place/Fr%C3%A0+Viaco+AgriResort/@42.6090023,11.773743,17z/data=!3m1!4b1!4m9!3m8!1s0x1329211725a1e1bb:0x3448628d8157f66e!5m2!4m1!1i2!8m2!3d42.6090023!4d11.7763233!16s%2Fg%2F1td8mqrj?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-medium hover:text-pale-blue transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodations */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Valentano */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pale-yellow">
              <div
                className="h-48 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}images/Valentano.png)`,
                }}
              />
            </div>

            {/* Poggio */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pale-yellow">
              <div
                className="h-48 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}images/AgriturismoPoggioilTufo.JPG)`,
                }}
              />
            </div>

            {/* Camping */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pale-yellow">
              <div
                className="h-48 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}images/tent.JPEG)`,
                }}
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Story;