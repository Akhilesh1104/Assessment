import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const MyProfile = () => {
  const { userData } = useContext(AppContext);

  return (
    <div className="max-w-lg flex flex-col justify-center gap-2 text-sm ml-4 md:ml-8">
      <p className="font-medium text-3xl mt-4 text-indigo-800 mb-3">
        {userData.firstName} {userData.lastName}
      </p>
      <hr className="bg-zinc-400 h-[2px] border-none" />
      <div>
        <p className="text-neutral-950 font-semibold text-xl underline mt-3">
          USER INFORMATION -
        </p><br />
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
        <p className="font-medium text-neutral-800 text-base">First Name :</p>
          <p className="text-gray-600 font-medium text-base">
            {userData.firstName}
          </p>
          <p className="font-medium text-neutral-800 text-base">Last Name :</p>
          <p className="text-gray-600 font-medium text-base">
            {userData.lastName}
          </p>
          <p className="font-medium text-neutral-800 text-base">Email Id :</p>
          <p className="text-blue-600 font-medium text-base">
            {userData.email}
          </p>
          <p className="font-medium text-neutral-800 text-base">Username :</p>
          <p className="text-blue-600 font-medium text-base">
            {userData.username}
          </p>
          <p className="font-medium text-neytral-500 text-base">Credits :</p>
          <p className="text-green-500 font-medium text-base">
            {userData.Points}
          </p>
          <p className="font-medium text-neutral-800 text-base">Created At :</p>
          <p className="text-gray-600 font-medium text-base">
            {userData.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
