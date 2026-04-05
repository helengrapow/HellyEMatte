import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car, Hotel, UtensilsCrossed, Gift, Music, Calendar } from 'lucide-react';

const Details = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Wedding Details
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your wedding details introduction */}
            We're excited to share all the details of our special day!
          </p>
        </div>
      </div>

      {/* Schedule Section - Improved layout */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Wedding Day Schedule
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              {/* CUSTOMIZE: Add a brief intro about your schedule */}
              Here is a rough time frame of what to expect on the day of our wedding:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-white h-full"></div>
              
              {/* Timeline items */}
              <div className="space-y-10">
                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Arrival
                      </h3>
                      <div className="flex items-center justify-end gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          11:30 AM - 12:30 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Enjoy some refreshing drinks while waiting for the ceremony to start
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Ceremony
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          12:30 PM - 13:30 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        We will be getting married surrounded by nature, overlooking the volcanic Lake of Mezzano
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Aperitivo and Lunch
                      </h3>
                      <div className="flex items-center justify-end gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          13:30 PM - 6:00 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Spending time under the oak trees, tasting local specialties and sharing our joy. Speeches are welcome! 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        The cake
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          6:00 PM - 6:45 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Cake cutting – a sweet and romantic moment at sunset
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Let's Dance!
                      </h3>
                      <div className="flex items-center justify-end gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          7:00 PM - undefined
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Time to hit the dance floor!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        The day after
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          12:00 AM - 16:00 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Slow recovery and, for those who still have energy, we can meet for a swim in Lake Bolzena!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Additional Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Dinner Options */}
            <div className="bg-white rounded-xl p-6 text-center border border-pale-yellow shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pale-yellow rounded-full mb-4">
                <UtensilsCrossed className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Dinner Options</h3>
              <p className="text-black">
                {/* CUSTOMIZE: Add information about food options */}
                Please let us know if you have any dietary restriction 
              </p>
                <p className="text-black"> 
                 in the
              
                RSVP questionnaire.
              </p>
              <Link 
                to="/rsvp" 
                className="text-black hover:text-pale-blue font-medium transition-colors"
              >
                RSVP Page
              </Link>
            </div>
            
            {/* Gift */}
            <div className="bg-white rounded-xl p-6 text-center border border-pale-yellow shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pale-yellow rounded-full mb-4">
                <Gift className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Wedding Gift</h3>
              <p className="text-black mb-4">
                {/* CUSTOMIZE: Add information about your registry */}
                You can visit our gift page if you'd like to contribute to our honeymoon!
              </p>
              <Link
                to="/registry" 
                className="text-black hover:text-pale-blue font-medium transition-colors"
              >
                Gift Page
              </Link>
            </div>
            
            {/* Music */}
            <div className="bg-white rounded-xl p-6 text-center border border-pale-yellow shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pale-yellow rounded-full mb-4">
                <Music className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Song Requests</h3>
              <p className="text-black">
                {/* CUSTOMIZE: Add information about music requests */}
                Have a song you want to hear at the reception? Let us know in your RSVP and we can potentially make it happen!
              </p>
              <Link 
                to="/rsvp" 
                className="text-black hover:text-pale-blue font-medium transition-colors"
              >
                RSVP Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
