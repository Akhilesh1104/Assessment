import React, { useContext ,useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { AppContext } from "../Context/AppContext";
import userimage from '../assets/images.jpg';
import dropdown_icon from '../assets/dropdown_icon.svg';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.png';

const Navbar = () => {

  const navigate = useNavigate();
  const {token, setToken,userData } = useContext(AppContext);
  const [showMenu,setShowMenu] = useState(false);

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token');
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 bg-gray-700 text-white'>
      <p onClick={()=>navigate('/')} className='w-44 cursor-pointer md:hidden px-5 font-semibold text-xl'>Leaderboard</p>
      <ul className='hidden md:flex items-start gap-5 font-medium mx-10'>

        <NavLink to='/'>
          <li className='p-2 hover:bg-gray-500 hover:rounded-md transtion-all duration-300'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'  />
        </NavLink>
       
        <NavLink to='/leaderboard'>
          <li className='p-2 hover:bg-gray-500 hover:rounded-md transtion-all duration-300'>LEADERBOARD</li>
          <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden' />
        </NavLink>
         
        <NavLink to='/popup'>
          <li className='p-2 hover:bg-gray-500 hover:rounded-md transtion-all duration-300'>POPUP</li>
          <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden' />
        </NavLink>

      </ul>
      <div className='flex items-center gap-4'>
        {
            token && userData
           ? <div className='flex items-center gap-2 cursor-pointer group relative md:mr-5'>
              <img className='w-8 h-8 rounded-full' src={userimage} alt="" />
              <img className='w-3' src={dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-200 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={()=> navigate('/login')} className='bg-white text-gray-800 px-4 py-2 mr-3 rounded font-semibold hidden md:block '>Login</button>
        }
        <img onClick={()=>setShowMenu(true)} className='w-7 md:hidden' src={menu_icon} alt="" />

        {/*------------------------Mobile Menu------------------- */}
        
<div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0' } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
  <div className='flex items-center justify-between px-5 py-6'>
    <p className='w-36'>Leaderboard</p>
    <img className='w-7' onClick={()=> setShowMenu(false)} src={cross_icon} alt="" />
  </div>
  <ul className='flex flex-col gap-2 items-center mt-5 px-5 text-lg font-medium'>

    <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block text-black'>HOME</p></NavLink>
    <NavLink  onClick={()=>setShowMenu(false)} to='/leaderboard'><p className='px-4 py-2 rounded inline-block text-black'>LEADERBOARD</p></NavLink>
    <NavLink  onClick={()=>setShowMenu(false)} to='/popup'><p className='px-4 py-2 rounded inline-block text-black'>POPUP</p></NavLink>

    { token 
    ? <p className='px-4 py-2 rounded inline-block text-black cursor-pointer' onClick={logout}>LOGOUT</p> 
    : <NavLink  onClick={()=>setShowMenu(false)} to='/login'><p className='px-4 py-2 rounded inline-block text-black'>LOGIN</p></NavLink>
    }
  </ul>
</div>
</div>
</div>
  );
}

export default Navbar;
