import React from 'react';
import Navbar from '../components/Navbar';

const RSVP = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            RSVP
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mb-6">
            We would love to celebrate with you.
          </p>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Please fill in our questionnaire to let us know if you will be joining us.
          </p>
        </div>
      </div>

      {/* RSVP Link Section */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-pale-yellow">
            <h2 className="text-3xl font-serif text-black mb-6">
              Let us know
            </h2>

            <p className="text-lg text-black leading-relaxed mb-8">
              The questionnaire only takes a few minutes and helps us organize the day in the best way.
            </p>

            <a
              href="https://febugent.eu.qualtrics.com/jfe/form/SV_6hgd6dGBYVjIYei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Open RSVP Questionnaire
            </a>
          </div>
        </div>
      </div>
      {/* Important Information */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-black mb-6">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg p-6 shadow-md border border-pale-yellow">
                <h3 className="text-lg font-semibold text-black mb-3">
                  RSVP Deadline
                </h3>
                <p className="text-black">
                  Please fill in the questionnaire by end of June.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-pale-yellow">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Questions?
                </h3>
                <p className="text-black">
                  If you have any questions, please get in touch with us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;

