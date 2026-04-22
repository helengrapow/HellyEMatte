import React from 'react';
import Navbar from '../components/Navbar';

const Registry = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* White intro section */}
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Wedding Gift
          </h1>

          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mb-6">
            Your presence at our wedding is the greatest gift of all.
          </p>

          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mb-12">
            If you wish to honor us with a gift, you can contribute, in any amount,
            to the honeymoon of our dreams!
          </p>

        </div>
      </div>

<div>
  {/* Honeymoon Fund Card Section */}
  <div className="py-16 bg-yellow-100">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-black mb-4">
          Honeymoon Fund
        </h2>
        <p className="text-lg text-black">Matteo Biasciutti & Helen Grapow</p>
        <p className="text-lg text-black font-mono mt-2">IBAN: BE59 6500 4806 3426</p>
        <p className="text-lg text-black font-mono">BIC/SWIFT: REVOBEB2</p>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="bg-white py-16">
    <div className="max-w-3xl mx-auto px-4">
      <img 
        src={`${import.meta.env.BASE_URL}images/honeymoonfinal.JPEG`} 
        alt="Honeymoon destination" 
        className="rounded-xl shadow-lg w-full object-cover"
      />
    </div>
  </div>

  {/* Thank You Section */}
  <div className="py-16 bg-yellow-100 text-center">
    <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
      Thank You
    </h2>
    <p className="text-xl text-black leading-relaxed">
      We can’t wait to celebrate our special day with you :)
    </p>
  </div>
</div>

  );
};

export default Registry;