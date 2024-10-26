import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import image from '../assets/images.jpg';

const Home = () => {

  const {claimPoints,data,getMonthlyData,getTodayData,getWeeklyData,oneData,twoData,threeData} = useContext(AppContext);

  const [choice,setChoice] = useState("daily");
  return (
       <div>
        
        <div className="flex flex-wrap justify-center gap-5 mb-10">

          <button onClick={(e)=>{getTodayData(); setChoice("daily");}} className={`px-6 py-2 border rounded-full ${choice === "daily" ? "bg-orange-400 text-white " : "bg-gray-50 text-orange-500"}`}>Daily</button>
          <button onClick={(e)=>{getWeeklyData(); setChoice("weekly");}} className={`px-6 py-2 border rounded-full ${choice === "weekly" ? "bg-orange-400 text-white" : "bg-gray-50 text-orange-500"}`}>Weekly</button>
          <button onClick={(e)=>{getMonthlyData(); setChoice("monthly");}} className={`px-6 py-2 border rounded-full ${choice === "monthly" ? "bg-orange-400 text-white" : "bg-gray-50 text-orange-500"}`}>Monthly</button>

        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-10">

          <div className="flex flex-col items-center gap-1 bg-white p-2 min-w-52 rounded border-2 border-gray-100 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
          <p>{oneData._id}</p>
          <p className="text-xl font-semibold text-neutral-900">
           {oneData.totalPoints}
          </p>
          <p className='text-orange-500 font-semibold'>Prize: ₹{oneData.totalPoints}</p>
          </div>

          <div className="flex flex-col items-center gap-1 bg-white p-2 min-w-52 rounded border-2 border-gray-100 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
          <p>{twoData._id}</p>
          <p className="text-xl font-semibold text-neutral-900">
          {twoData.totalPoints}
          </p>
          <p className='text-orange-500 font-semibold'>Prize: ₹{twoData.totalPoints}</p>
          </div>

          <div className="flex flex-col items-center gap-1 bg-white p-2 min-w-52 rounded border-2 border-gray-100 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
          <p>{threeData._id}</p> 
          <p className="text-xl font-semibold text-neutral-900">
          {threeData.totalPoints}
          </p>
          <p className='text-orange-500 font-semibold'>Prize: ₹{threeData.totalPoints}</p>
          </div>
        </div>


    <div className='w-full max-w-6xl m-auto mb-24'>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
        {
          data.map((item,index)=>(
            <div className='flex flex-wrap justify-between max-sm:gap-2 items-center text-gray-600 py-3 px-6 border-b hover:bg-gray-200 transition-all duration-300 cursor-pointer' onClick={()=>claimPoints(item._id)} key={index}>
             <div className='flex items-center gap-2'>
              <img className='w-7 h-7 rounded-full mr-2' src={image} alt="" />
              <p className='text-neutral-800 font-medium'>{item._id}<br/>Rank: {index+1}</p>
             </div>
             <p className='text-orange-500 text-base'>Prize: ₹{item.totalPoints}</p>
             <div className='flex items-center gap-2'>
              <p className='text-green-600 text-base'>{item.totalPoints}</p>
             </div>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  );
}

export default Home;