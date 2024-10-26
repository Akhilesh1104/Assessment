import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import image from "../assets/images.jpg";
import History from "../Components/History";

const Leaderboard = () => {

  const { allUsers,getUserHistory } = useContext(AppContext);

  return (
    <div className="w-full max-w-6xl m-auto mt-10">
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        {allUsers.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 items-center text-gray-600 py-3 px-6 border-b hover:bg-gray-200 transition-all duration-300 cursor-pointer"
            onClick={() =>{getUserHistory(item.username); document.getElementById("my_modal_3").showModal()}}
            key={index}
          >
            <div className="flex items-center gap-2">
              <img className="w-7 h-7 rounded-full mr-2" src={image} alt="" />
              <p className="text-neutral-800 font-medium">
                {item.firstName}
                <br />
                Rank: {index + 1}
              </p>
            </div>
            <p className="text-orange-500 text-base">Prize: ₹{item.Points}</p>
            <div className="flex items-center gap-2">
              <p className="text-green-600 text-base">{item.Points}</p>
            </div>
            <History />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
