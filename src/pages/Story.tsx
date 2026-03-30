
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
                <img
                  src={`${import.meta.env.BASE_URL}public/images/Venue.PNG`}
                  alt="Venue"
                  className="w-full h-full object-cover"
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
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
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
              We will guarantee the shuttle to the locations below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="public/images/Valentano.PNG"
                  alt="Town of Valentano"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    Valentano
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    Located about 12 minutes from the venue, Valentano is the closest town. 
                    You can find hotels and rooms on Booking and Airbnb. 
                    There are also a few apartments from the venue owner that are not listed online — feel free to contact us if you’re interested.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    60/night
                  </span>
                  <a
                    href="https://maps.app.goo.gl/pBwAcRF2DtZCAP2BA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="public/images/AgriturismoPoggioilTufo.JPG"
                  alt="Agriturismo Poggio Le Volpi"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    Agriturismo Poggio il Tufo
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    About 20 minutes from the venue, this agriturismo offers rooms and apartments surrounded by vineyards, with a swimming pool and breakfast included.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    60/night
                  </span>
                  <a
                    href="https://www.google.com/maps/place/Agriturismo+Poggio+al+Tufo/@42.6089131,11.6956498,16.42z/data=!4m9!3m8!1s0x13291f84a2c35001:0x3df951ecb7acb113!5m2!4m1!1i2!8m2!3d42.6085323!4d11.6967274!16s%2Fg%2F12mj_ld49!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    View on Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="public/images/tent.JPEG"
                  alt="Camping Option"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    Camping at the Venue
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    A great option for the more adventurous and nature lovers. 
                    Vans, campers, and tents are all welcome, and we also have a few tents available if needed.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    Free
                  </span>
                  <a
                    href="https://www.google.com/maps/place/Fr%C3%A0+Viaco+AgriResort/@42.6090023,11.773743,17z/data=!3m1!4b1!4m9!3m8!1s0x1329211725a1e1bb:0x3448628d8157f66e!5m2!4m1!1i2!8m2!3d42.6090023!4d11.7763233!16s%2Fg%2F1td8mqrj?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Shuttle Bus
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-pale-yellow">
            <div className="space-y-8">
              <div>
                 <p className="text-black">
           A shuttle service will take you to and from the venue. 
            We encourage guests to use it, as the road to the venue is unpaved, with no artificial lights, and driving at night can be difficult.
            It also allows everyone to enjoy the celebration without worrying about drinking and driving.
          </p>
              </div>

<div>
          <h3 className="text-xl font-semibold text-black mb-3">
            Arrival
          </h3>
          <p className="text-black">
            Shuttle departures from Valentano and Agriturismo Poggio il Tufo.
            The shuttle will bring guests to the venue.
          </p>
        </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3"> During the Event </h3>
                <p className="text-black">
                  The shuttle remains available on standby for guests who needs it.
                </p>
              </div>
                 <div>
                <h3 className="text-xl font-semibold text-black mb-3"> Evening / Return </h3>
                <p className="text-black">
                  Shuttle service back to the accommodations will run throughout the evening, so you can return whenever you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;