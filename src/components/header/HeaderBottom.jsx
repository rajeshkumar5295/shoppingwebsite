import React, { useState ,useRef ,useEffect } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import {motion} from "framer-motion";

import { useSelector } from 'react-redux';


const HeaderBottom = () => {
      


   const userInfo=useSelector((state)=>state.amazon.userInfo);
   const ref=useRef();
  const[sidebar ,setSidebar]=useState(false);

  useEffect(()=>{
         document.body.addEventListener("click",(e)=>{
            if(e.target.contains(ref.current)){
               setSidebar(false)
            }
         })
  },[ref,sidebar,])

  return (
 <div  className="bg-amazon_light w-full px-4 h-[36px] text-white  flex items-center">
       
     <ul className='flex items-center gap-2 text-sm trackign-wide' >
        <li onClick={()=>setSidebar(true)}   className='px-2 h-[80%] flex items-center  border border-transparent   hover:border-white   cursor-pointer duration-100  gap-1 ' >  <MenuIcon/>    All</li>
        <li className='headerHover  hidden md:inline-flex ' >Customer Service</li>
        <li className='headerHover  hidden md:inline-flex  ' >Today's Deals</li>
        <li className='headerHover hidden md:inline-flex ' >Registry</li>
        <li className='headerHover  hidden md:inline-flex' >Gift Cards </li>
        <li className='headerHover  hidden md:inline-flex' >Sell</li>
     </ul>



     {
        sidebar && (
            <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50' >
                  <div className='w-full h-full relative' >

                         < motion.div  initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}}  transition={{duration:.5}}  
                            ref={ref}
                            className=' w-[80%]  md:w-[350px]   h-full  bg-white border border-black' >

                                <div className='w-full bg-amazon_light  text-white  py-2 px-6  flex items-center gap-4'  >
{/* 
                                       {
                                          userInfo?( <p>  {userInfo.image} </p> ):(      <div>   <AccountCircleIcon/>
                                          </div> )
                                       } */}


                                       { userInfo?  ( <p  className=' ' > <img   className='rounded-full h-10 ' src="https://i0.wp.com/www.wikiblogon.in/wp-content/uploads/2023/03/HD-wallpaper-kriti-shetty-actress-krithi-krithi-shetty-krithishetty-kritishetty-telugu-actress-telugu-movie-uppena-thumbnail.jpg" alt="" /> </p> ): ( <p>   <AccountCircleIcon/> </p> ) }
                                      

                                  <h3 className='font-titleFont font-bold text-lg tracking-wide '>  {  
                                       userInfo?( <p> Hello,{userInfo.userName} </p>  ):( <p> Hello,Sign In </p> )
                                     }  </h3>
                                     
                                </div>
                                 
                                 {/* <div>
                                  <h3 className='text-lg font-titleFont font-semibold mb-1  px-6' >Digital Content & Devices </h3>
                                     <ul>
                                         <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer  '  >Amazon Music <span> <KeyboardArrowRightIcon/> </span>
                                          </li>
                                          <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer  '  >Amazon Music <span> <KeyboardArrowRightIcon/> </span>
                                          </li>
                                          <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer  '  >Amazon Music <span> <KeyboardArrowRightIcon/> </span>
                                          </li>
                                     </ul>
                                 </div> */}
                                 <SideNavContent  
                                    title="Digital Content & Devices"
                                    one="Amazon Music"
                                    two="Kindle E-readers & Books"
                                    three="Amazon Appstore"
                                 />
                                  <SideNavContent  
                                    title="Shop By Department"
                                    one="Electronics"
                                    two="Computers"
                                    three="Smart Home "
                                 />
                                   <SideNavContent  
                                    title="Programs & Features"
                                    one="Gift CArds"
                                    two="Amazon live"
                                    three="International Shopping"
                                 />
                                   <SideNavContent  
                                    title="Help & Settings "
                                    one="Your Account"
                                    two="Customer Service"
                                    three="Contact Us"
                                 />

                          <span  onClick={()=>setSidebar(false)}   className='cursor-pointer absolute top-0 left-[180] md:left-[350px] w-5 h-5  text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500  hover:text-white duration-300'> <CloseIcon/>  </span>

                                                                 
                         </motion.div>
                         
                  </div>

            </div>
        )
     }


 </div>
  )
}

export default HeaderBottom;