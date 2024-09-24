import React from 'react';
import gallery1 from '../images/gallery/gallery-1.jpg';
import gallery2 from '../images/gallery/gallery-2.jpg';
import gallery3 from '../images/gallery/gallery-3.jpg';
import gallery4 from '../images/gallery/gallery-4.jpg';
import gallery5 from '../images/gallery/gallery-5.jpg';
import gallery6 from '../images/gallery/gallery-6.jpg';
import gallery7 from '../images/gallery/gallery-7.jpg';

const ImagesGallery = () => {
  return (
    <section className="py-10">
      <div className="flex flex-wrap justify-center gap-4 text-sm font-bold mb-16">
        <a href="#" className="hover:text-red-500">ALL GALLERY</a>
        <a href="#" className="hover:text-red-500">FITNESS</a>
        <a href="#" className="hover:text-red-500">COACHING</a>
        <a href="#" className="hover:text-red-500">EVENT</a>
        <a href="#" className="hover:text-red-500">OTHER</a>
      </div>

      <div className="flex flex-wrap justify-center mx-4">
        <div className="flex flex-col items-center mb-4">
          <img src={gallery1} alt="Image-1" className="w-full max-w-xs h-auto rounded-lg" />
        </div>
        <div className="flex flex-col items-center mb-4">
          <img src={gallery2} alt="Image-2" className="w-full max-w-xs h-auto rounded-lg" />
        </div>
        <div className="flex flex-col items-center mb-4">
          <img src={gallery3} alt="Image-3" className="w-full max-w-xs h-auto rounded-lg" />
          <img src={gallery4} alt="Image-4" className="mt-2 w-full max-w-xs h-auto rounded-lg" />
        </div>
        <div className="flex flex-col items-center mb-4">
          <img src={gallery5} alt="Image-5" className="w-full max-w-xs h-auto rounded-lg" />
        </div>
        <div className="flex flex-col items-center mb-4">
          <img src={gallery6} alt="Image-6" className="w-full max-w-xs h-auto rounded-lg" />
        </div>
        <div className="flex flex-col items-center mb-4">
          <img src={gallery7} alt="Image-7" className="w-full max-w-xs h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default ImagesGallery;
