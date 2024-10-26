import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [userData, setUserData] = useState(false);
  const [oneData,setOneData] = useState({});
  const [twoData,setTwoData] = useState({});
  const [threeData,setThreeData] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [data,setData] = useState([]);
  const [history, setHistory] = useState([]);

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
 

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/user/v1/get-users");
      if (data.success) {
        data.data.sort((a, b) => b.Points - a.Points);
        setAllUsers(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  
  const loadUserProfileData = async () => {
    try {
      let authorization = token;
      const { data } = await axios.post(backendUrl + "/user/v1/get-users-info",{},{
        headers: { authorization },
      });

      if (data.success) {
        setUserData(data.data);
      } else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const claimPoints = async (username) => {
    try {
      const {data} = await axios.post(backendUrl + '/user/v1/claim-points',{username})
        if(data.success){
          toast.success(data.message);
          getTodayData();
          getMonthlyData();
          getWeeklyData();
        }
        else{
          toast.error(data.message)
        }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getTodayData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/user/v1/your-daily-history");
      if (data.success) {
        let todayData = data.data;
        setData(todayData);
        setOneData(todayData[0]);
        setTwoData(todayData[1]);
        setThreeData(todayData[2]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getWeeklyData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/user/v1/your-weekly-history");
      if (data.success) {
        let weeklyData = data.data;
        setData(weeklyData);
        setOneData(weeklyData[0]);
        setTwoData(weeklyData[1]);
        setThreeData(weeklyData[2]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getMonthlyData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/user/v1/your-monthly-history");
      if (data.success) {
        let monthData = data.data;
        setData(monthData);
        setOneData(monthData[0]);
        setTwoData(monthData[1]);
        setThreeData(monthData[2]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserHistory = async(username) => {
    try {
      const { data } = await axios.post(backendUrl + "/user/v1/your-history", {
        username,
      });
      if (data.success) {
        setHistory(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    allUsers,
    getAllUsers,
    token,
    setToken,
    backendUrl,
    userData,
    getMonthlyData,
    getTodayData,
    getWeeklyData,
    data,
    oneData,
    twoData,
    threeData,
    claimPoints,
    getUserHistory,
    history,
  };

  useEffect(() => {
    getAllUsers();
    getTodayData();
    getWeeklyData();
    getMonthlyData();
  }, []);

  useEffect(() => {
    if(token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
