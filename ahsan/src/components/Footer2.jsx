import React from 'react';
import footerSignup from '../images/footer-signup.jpg';

const Footer2 = () => {
  return (
    <section className="bg-black pt-10 px-6 md:px-24 pb-10">
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex-1">
          <p className="text-red-500">Phone</p>
          <p className="text-white">(123) 118 9999 - (123) 118 9999</p>
        </div>
        <div className="flex-1">
          <p className="text-red-500">Address</p>
          <p className="text-white">72 Kangnam, 45 Opal Point Suite 391</p>
        </div>
        <div className="flex-1">
          <p className="text-red-500">Email</p>
          <p className="text-white">contactcompany@Gutim.com</p>
        </div>
      </div>
      <div
        className="mt-16 bg-cover bg-center bg-no-repeat p-8"
        style={{ backgroundImage: `url(${footerSignup})` }}
      >
        <div className="text-white">
          <h1 className="text-xl md:text-2xl font-semibold">SUBSCRIBE TO OUR MAILING LIST</h1>
          <p className="text-xs md:text-sm font-medium">
            Sign up to receive the latest information
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-white font-medium tracking-wide text-xs md:text-base">
          ©&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright ©2024 All
          rights reserved | This template is by
          <a href="#" className="text-white hover:text-red-500">Colorlib</a>
        </p>
      </div>
    </section>
  );
}

export default Footer2;
