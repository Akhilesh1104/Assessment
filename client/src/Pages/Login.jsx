import React,  { useContext, useEffect, useState }  from "react";
import { AppContext } from "../Context/AppContext";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const {backendUrl, setToken } = useContext(AppContext);
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [username,setUserName] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Sign Up') {
        const {data} = await axios.post(backendUrl + '/auth/v1/register',{firstName,lastName,email,username,password})
        if(data.success){
          toast.success(data.message);
          navigate('/');
        }
        else{
          toast.error(data.message)
        }
      }
      else{
          const {data} = await axios.post(backendUrl + '/auth/v1/login',{username,password})
          if(data.success){
            localStorage.setItem('token',data.token);
            setToken(data.token);
            navigate('/');
            toast.success(data.message);
          }
          else{
            toast.error(data.message)
          }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-700 text-sm shadow-2xl">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Register" : "Login"}
        </p>
        <p className="text-base">
          Please {state === "Sign Up" ? "register" : "login"} here
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>First Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-2 outline-gray-900"
              onChange={(e) => setFName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="First Name"
              required
            />
             <p className="mt-2">Last Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-2 outline-gray-900"
              onChange={(e) => setLName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="Last Name"
              required
            />
            <p className="mt-2">Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-2 outline-gray-900"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Username</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-2 outline-gray-900"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            type="name"
            placeholder="Username"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-2 outline-gray-900"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-700 text-white w-full py-2 rounded-md text-base my-5"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new Account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 cursor-pointer underline"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
