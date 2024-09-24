import React from 'react';

const ClassTimetable = () => {
  return (
    <section className="mt-20 mx-6 lg:mx-24  mb-5">
      <p className="uppercase text-center text-4xl font-bold">Class Timetable</p>
      <div className="flex justify-center gap-5 text-base font-bold mt-20 mb-16 flex-wrap">
        <a href="#" className="hover:text-red-500">ALL CLASS</a>
        <a href="#" className="hover:text-red-500">GYM</a>
        <a href="#" className="hover:text-red-500">CROSSFIT</a>
        <a href="#" className="hover:text-red-500">CARDIO</a>
        <a href="#" className="hover:text-red-500">BODY</a>
        <a href="#" className="hover:text-red-500">YOGA</a>
      </div>

      <div className="mx-auto w-full overflow-x-auto">
        <table className="bg-white border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200 h-20 text-lg">
              <th className="py-2 px-4"></th>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <th key={day} className="py-2 px-4">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              {
                time: "10.00",
                classes: ["GYM", "", "YOGA", "", "BODY", "", "CARDIO"]
              },
              {
                time: "14.00",
                classes: ["", "RUNNING", "", "BOX", "", "GYM", ""]
              },
              {
                time: "16.00",
                classes: ["CARDIO", "", "GYM", "", "YOGA", "", "GYM"]
              },
              {
                time: "18.00",
                classes: ["BOX", "BODY", "", "CROSSFIT", "", "CARDIO", ""]
              },
              {
                time: "20.00",
                classes: ["", "GYM", "BODY", "", "CARDIO", "", "CROSSFIT"]
              }
            ].map(({ time, classes }, rowIndex) => (
              <tr key={rowIndex} className="border-t border-gray-300">
                <td className="py-2 px-4 border border-gray-400 font-semibold">{time}</td>
                {classes.map((activity, index) => (
                  <td
                    key={index}
                    className={`group py-2 px-4 border border-gray-400 text-center ${activity ? 'hover:bg-red-500 hover:text-white transition duration-300' : ''}`}
                  >
                    {activity && (
                      <div>
                        <p className="text-red-500 font-bold group-hover:text-white transition duration-300">{activity}</p>
                        <p className="font-semibold">{`${time}-${parseFloat(time) + 1}.00`}</p>
                        <p className="text-gray-500 group-hover:text-white transition duration-300">John Smith</p>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClassTimetable;
