import React from 'react';

const Counter = () => {
  return (
    <section className="mx-4 mt-24 bg-gradient-to-r from-red-500 to-red-800 text-white p-5 rounded-lg">
      <div className="flex flex-wrap justify-center items-center text-center">
        {[
          { count: 98, label: 'PROGRAMS' },
          { count: 14, label: 'LOCATIONS' },
          { count: '50k+', label: 'MEMBERS' },
          { count: 34, label: 'COACHES' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col justify-center items-center m-4 p-5 transition duration-300 hover:text-white hover:bg-black rounded-lg">
            <p className="text-4xl md:text-6xl">{item.count}</p>
            <p className="text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
