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

      {/* Yellow section */}
<div className="py-16 bg-yellow-100">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-xl mx-auto">

      <h2 className="text-2xl md:text-3xl font-serif text-black mb-4">
        Honeymoon Fund
      </h2>

      <p className="text-lg text-black mb-2">
        Matteo Biasciutti & Helen Grapow
      </p>

      <p className="text-lg text-black mb-2">
        Iban BE59650048063426
      </p>
      <p className="text-lg text-black mb-2">
         Bic/Swift REVOBEB2
      </p>
    </div>

    <h2 className="text-3xl md:text-4xl font-serif text-black mt-12 mb-4">
      Thank you
    </h2>

    <p className="text-black leading-relaxed">
      We can’t wait to celebrate our special day with you!
    </p>

  </div>
</div>
<div className="mt-16 flex justify-center">
    <img
      src={`${import.meta.env.BASE_URL}images/honeymoon_final.jpg`}
      alt="Our honeymoon (destination to be announced)"
      className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
    />
</div>
<div className="mt-16 flex justify-center">
    <p className="mt-6 text-xl font-serif text-black">
      
    </p>
</div>
<div className="mt-16 flex justify-center">
    <p className="mt-6 text-xl font-serif text-black">
      
    </p>
</div>
</div>
  );
};

export default Registry;