import React from 'react';
import blog1 from '../images/blog/blog-1.jpg';
import blog2 from '../images/blog/blog-2.jpg';
import blog3 from '../images/blog/blog-3.jpg';

const LatexBlog = () => {
  return (
    <section className="mx-4 md:mx-10 lg:mx-20">
      <p className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">LATEST BLOG</p>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full md:w-1/3">
          <img src={blog1} alt="Blog 1" className="w-full h-auto object-cover" />
          <p className="text-gray-400 mt-6">
            February 17, 2019 <a className="text-red-500" href="#">#Gym</a>
          </p>
          <p className="text-xl md:text-2xl font-semibold mt-5">
            <a href="#">10 States At Risk of Rural Hospital Closures</a>
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <img src={blog2} alt="Blog 2" className="w-full h-auto object-cover" />
          <p className="text-gray-400 mt-6">
            February 17, 2019 <a className="text-red-500" href="#">#Sport</a>
          </p>
          <p className="text-xl md:text-2xl font-semibold mt-5">
            <a href="#">Diver who helped save Thai soccer team</a>
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <img src={blog3} alt="Blog 3" className="w-full h-auto object-cover" />
          <p className="text-gray-400 mt-6">
            February 17, 2019 <a className="text-red-500" href="#">#Body</a>
          </p>
          <p className="text-xl md:text-2xl font-semibold mt-5">
            <a href="#">Man gets life in prison for stabbing</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LatexBlog;
