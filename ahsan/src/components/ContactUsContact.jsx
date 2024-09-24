import React from 'react';
import icon1 from '../images/icon/icon-1.png';
import icon2 from '../images/icon/icon-2.png';
import icon3 from '../images/icon/icon-3.png';

const ContactUsContact = () => {
  return (
    <section className="flex flex-col md:flex-row mt-20 justify-between mb-5 px-4 md:px-20">
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <p className="text-2xl font-semibold">CONTACT US</p>
        {[
          { src: icon1, title: 'Our Location', desc: '60-49 Road 11378 New York' },
          { src: icon2, title: 'Phone:', desc: '+65 11.188.888' },
          { src: icon3, title: 'Mail', desc: 'hellocolorlib@gmail.com' },
        ].map(({ src, title, desc }) => (
          <div className="flex mt-4" key={title}>
            <img src={src} alt={title} className='w-16 h-16 rounded-full border border-slate-500 bg-gray-100' />
            <div className="ml-4">
              <p className="text-xl text-gray-500">{title}</p>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-3/4">
        <p className="text-2xl font-semibold uppercase">Leave a Comment</p>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 w-full md:w-80 h-12 pl-6 mt-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 w-full md:w-80 h-12 pl-6 mt-2 md:ml-2.5"
          />
          <div>
            <textarea
              placeholder="Enter your message"
              className="border-2 w-full h-40 pl-6 mt-4 pt-2"
            />
          </div>
          <input
            type="submit"
            value="Send Message" 
            className="w-full md:w-36 h-10 mt-6 bg-gradient-to-r from-red-500 to-red-800 text-white"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUsContact;
