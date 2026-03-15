
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
                  src="public/images/Venue.PNG"
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
              We’ve reserved a room at the JW Marriott for our wedding night, and anyone who would like to stay there is very welcome to do so.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop&crop=center"
                  alt="JW Marriott San Antonio Hill Country Resort & Spa"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    JW Marriott
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    Located about 30 minutes from the venue. One of the nicest hotels in San Antonio and home to the TPC San Antonio golf course.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    $400/night
                  </span>
                  <a
                    href="https://www.marriott.com/search/availabilityCalendar.mi?isRateCalendar=true&propertyCode=SATJW&isSearch=true&currency=&costTab=average#/0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop&crop=center"
                  alt="Courtyard by Marriott San Antonio Airport"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    Courtyard Marriott
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    A bit farther from the venue, but closer to the San Antonio airport. A convenient option if you want easier access to both.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    $185/night
                  </span>
                  <a
                    href="https://www.marriott.com/reservation/rateListMenu.mi?dclid=CjkKEQjw6NrBBhCnsr3GzNuZ-dwBEiQAFJKSzdZYjaWswLT_FEGE6nioptaK-epr62qWQpHtc12vefe3w_wcB&gbraid=0AAAAAo3SzG6xw854UOJGzACxCA_PvgDel&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rpIy08LjoDXH3ROE8WR-kpt8zwDWRpHO2f0yVJm2Xgcpk_sh3_Eq_RoCGC0QAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop&crop=center"
                  alt="Hotel Emma San Antonio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    Hotel Emma
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    About 45 minutes from the venue. A good option if you plan to spend a little more time in San Antonio.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    $560/night
                  </span>
                  <a
                    href="https://be.synxis.com/?_gl=1*1nylehy*_gcl_au*MTQ1MDgyNjI4LjE3NDc4NzUxNzE.*_ga*MTM4ODYwMTk4MS4xNzQ3ODc1MTcy*_ga_0D7P5TR5JN*czE3NDg0ODUyMTkkbzIkZzEkdDE3NDg0ODUzMTkkajU0JGwwJGgxNzQxODE2MjE3&adult=2&arrive=2025-05-28&chain=10237&child=0&currency=USD&depart=2025-05-29&hotel=65605&level=hotel&locale=en-US&productcurrency=USD&rooms=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    Book Now
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
              Travel Information
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-pale-yellow">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">By Air</h3>
                <p className="text-black">
                  The nearest airport is Fiumicino Airport, about 2 hours from the venue and 15 minutes from the nearest town of Valentano. Perugia or Firenze also works, but the road wil be heavier.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">By Car</h3>
                <p className="text-black">
                  If you are staying in or around Rome, the simplest route is north on , then right on . The venue is about 15 minutes from there, mind the route which is sterrata for the last 5 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Transportation</h3>
                <p className="text-black">
                  We will be providing a shuttle service from and to the locations above. Please make sure to reserve a place to stay there if you want the shuttle service to take you to and back from the venue.
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