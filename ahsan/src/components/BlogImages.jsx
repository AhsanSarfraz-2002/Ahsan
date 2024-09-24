import React from 'react';

// Importing images directly
import blogImage1 from '../images/blog/blog-1.jpg';
import blogImage2 from '../images/blog/blog-2.jpg';
import blogImage3 from '../images/blog/blog-3.jpg';
import blogImage4 from '../images/blog/blog-4.jpg';
import blogImage5 from '../images/blog/blog-5.jpg';
import blogImage6 from '../images/blog/blog-6.jpg';
import blogImage7 from '../images/blog/blog-7.jpg';
import blogImage8 from '../images/blog/blog-8.jpg';
import blogImage9 from '../images/blog/blog-9.jpg';

const BlogImages = () => {
  const blogImages = [
    blogImage1,
    blogImage2,
    blogImage3,
    blogImage4,
    blogImage5,
    blogImage6,
    blogImage7,
    blogImage8,
    blogImage9,
  ];

  return (
    <section className="mx-4 md:mx-20 mt-24 mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogImages.map((image, index) => (
          <div className="w-full" key={index}>
            <img src={image} alt={`Blog ${index + 1}`} className="w-full h-auto" />
            <p className="text-gray-400 mt-6">
              February 17, 2019 <a className="text-red-500" href="#">#Tag</a>
            </p>
            <p className="text-2xl font-semibold mt-5">
              <a href="#">Blog Title {index + 1}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogImages;
