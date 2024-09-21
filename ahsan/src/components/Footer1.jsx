import React from 'react';
import footerBanner1 from '../images/footer-banner/footer-banner-1.jpg';
import footerBanner2 from '../images/footer-banner/footer-banner-2.jpg';

const Footer1 = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 mt-[-50px]">
      <div className="flex flex-col lg:flex-row mt-12 gap-6">
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat p-8 lg:p-16 text-center lg:text-left"
          style={{ backgroundImage: `url(${footerBanner1})` }}
        >
          <p className="uppercase text-red-500 font-bold mt-4 lg:mt-16">New Member</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 lg:mt-11 text-white">7 Days for Free</p>
          <p className="mt-2 lg:mt-4 text-white text-sm lg:text-base">
            Complete the training sessions with us, surely you will be happy
          </p>
          <form className="mt-6 lg:mt-11">
            <input
              type="submit"
              value="Get Started"
              className="w-full sm:w-40 h-12 bg-gradient-to-r from-red-500 to-red-900 text-white font-semibold rounded-md cursor-pointer"
            />
          </form>
        </div>
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat p-8 lg:p-16 text-center lg:text-left"
          style={{ backgroundImage: `url(${footerBanner2})` }}
        >
          <p className="uppercase text-red-500 font-bold mt-4 lg:mt-16">Contact Us</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 lg:mt-11 text-white">09 746 204</p>
          <p className="mt-2 lg:mt-4 text-white text-sm lg:text-base">
            If you trust us on your journey, you won’t be disappointed!
          </p>
          <form className="mt-6 lg:mt-11">
            <input
              type="submit"
              value="Get Started"
              className="w-full sm:w-40 h-12 bg-gradient-to-r from-red-500 to-red-900 text-white font-semibold rounded-md cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Footer1;
