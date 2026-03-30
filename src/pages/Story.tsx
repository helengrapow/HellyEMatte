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
                  <MapPin className="w-5 h-5 text-pale-blue mt-1" />
                  <div>
                    <p className="font-medium text-black">Address:</p>
                    <p className="text-black">
                      Localita' Mezzano, 01018 Valentano VT, Italy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <Car className="w-5 h-5 text-pale-blue mt-1" />
                  <div>
                    <p className="font-medium text-black">Parking Information:</p>
                    <p className="text-black">
                      Parking is available at the entrance of the venue.
                    </p>
                  </div>
                </div>

                <p className="text-black mb-6">
                  Our venue is surrounded by nature, overlooking the volcanic Lake of Mezzano, with grassy fields and olive and oak trees all around.
                  If the weather allows, the whole celebration will take place outdoors.
                </p>

                <a
                  href="https://www.google.com/maps/place/Fr%C3%A0+Viaco+AgriResort/@42.6090023,11.773743,17z/data=!3m1!4b1!4m9!3m8!1s0x1329211725a1e1bb:0x3448628d8157f66e!5m2!4m1!1i2!8m2!3d42.6090023!4d11.7763233!16s%2Fg%2F1td8mqrj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-medium hover:text-pale-blue"
                >
                  View on Map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodations */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Hotel Recommendations
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              We will sleep at the Agriresort of the Ceremony. Unfortunately, the place there is very limited.
              We will guarantee the shuttle to the locations below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Valentano */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pale-yellow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}images/Valentano.png)`,
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Valentano</h3>
                <p className="text-sm text-black mb-4">
                  Located about 12 minutes from the venue, Valentano is the closest town.
                  You can find hotels and rooms on Booking and Airbnb.
                  There are also apartments from the venue owner not listed online.
                </p>
                <div className="flex justify-between">
                  <span>60/night</span>
                  <a href="https://maps.app.goo.gl/pBwAcRF2DtZCAP2BA" target="_blank">
                    Map
                  </a>
                </div>
              </div>
            </div>

            {/* Poggio Tufo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pale-yellow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}images/AgriturismoPoggioilTufo.jpg)`,
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Agriturismo Poggio il Tufo
                </h3>
                <p className="text-sm text-black mb-4">
                  About 20 minutes from the venue, with vineyards, pool, and breakfast included.
                </p>
                <div className="flex justify-between">
                  <span>60/night</span>
                  <a href="https://www.google.com/maps/place/Agriturismo+Poggio+al+Tufo/" target="_blank">
                    Map
                  </a>
                </div>
              </div>
            </div>

            {/* Camping */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pale-yellow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}images/tent.jpeg)`,
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Camping at the Venue
                </h3>
                <p className="text-sm text-black mb-4">
                  Vans, campers, and tents are welcome. Some tents available.
                </p>
                <div className="flex justify-between">
                  <span>Free</span>
                  <a href="#" target="_blank">Map</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Shuttle */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto p-8 border rounded-xl">
          <h2 className="text-3xl font-serif text-center mb-6">Shuttle Bus</h2>

          <p className="mb-6">
            A shuttle service will take you to and from the venue. The road is unpaved and dark, so we recommend using it.
          </p>

          <h3 className="font-semibold">Arrival</h3>
          <p className="mb-4">
            Departures from Valentano and Poggio il Tufo.
          </p>

          <h3 className="font-semibold">During</h3>
          <p className="mb-4">
            Shuttle available on standby.
          </p>

          <h3 className="font-semibold">Return</h3>
          <p>
            Continuous service during the evening.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Story;