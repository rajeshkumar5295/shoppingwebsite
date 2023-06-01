import React, { useEffect, useState } from 'react';
// import logo from "../../assets/darklogo.png";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logo } from '../../assets/index';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { Link, NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import { getAuth, signOut } from "firebase/auth";

import LogoutIcon from "@mui/icons-material/Logout";
import { userSignOut } from '../../redux/amazonSlice';
const Header = () => {
        
      const dispatch=useDispatch();
     const auth = getAuth();
     const[showAll,setShowAll]=useState(false);

    //  const allItems=[
    //   {  _id:"100",title:"All Departments" },
    //   {  _id:"101",title:"Automotive" },
    //   {  _id:"102",title:"Baby" },
    //   {  _id:"103",title:"Beauty & Personal Care" },
    //   {  _id:"104",title:"Books" },
    //   {  _id:"105",title:"Boys'Fashion" },
    //   {  _id:"106",title:"Computers" },

    //   {  _id:"128",title:"Deals" },
    //   {  _id:"129",title:"Digital Music" },
    //   {  _id:"130",title:"Electronics" },
    //   {  _id:"100",title:"Girls'Fashion" },

    //   {  _id:"112",title:"Health & Household" },
    //   {  _id:"113",title:"Home & Kitchen"},
    //   {  _id:"114",title:"Kindle Store" },
    //   {  _id:"116",title:"Luggage" },
    //   {  _id:"117",title:"Men's Fashion" },
    //   {  _id:"118",title:"Movies & TV" },
    //   {  _id:"119",title:"Music,CDs & Vinyl" },
    //   {  _id:"120",title:"Pet Supplies" },
    //   {  _id:"121",title:"Prime Video" },
    //   {  _id:"122",title:"Software" },
    //   {  _id:"123",title:"Sports & Outdoors" },
    //   {  _id:"124",title:"Tools & Home Improvement" },
    //   {  _id:"125",title:"Toys & Games" },
    //   {  _id:"126",title:"Video Games" },
    //   {  _id:"127",title:"Women's Fashion" },
    
    //  ]
    const products=useSelector((state)=>state.amazon.products );
    const userInfo=useSelector((state)=>state.amazon.userInfo);

    const ref=useRef();
      useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
          if(e.target.contains(ref.current)){
            showAll && setShowAll(false);
          }
        });
      },[ref,showAll]);
    
      //  console.log(products);
      
        const handleLogout=()=>{

          signOut(auth).then(() => {
              console.log("Sign out successfully");
              dispatch(userSignOut())
          }).catch((error) => {
             console.log(error);
          });
          
        }


  return (
  <div className='w-full sticky  top-0 z-50 '   >
    <div className='w-full bg-amazon_blue  text-white px-4 py-3  flex items-center gap-4 '>
          {/* img start here */}
             
        <Link to="/" >
        <div className=' headerHover' >
         <img src={logo} alt="logo" className=' w-24 mt-2 '/>
         </div>
        </Link>
                      
       
          <div className='  headerHover hidden mdl:inline-flex  ' >
          <LocationOnOutlinedIcon/>
           <p className='text-sm  text-lightText font-light flex flex-col '  >Deliver to <span  className='text-sm font-semibold -mt-1 text-whiteText'>Atka</span></p>
            </div>


          <div className='h-10  rounded-md  hidden lgl:flex   flex flex-grow relative  '>
           
            <span  onClick={()=>setShowAll(!showAll)}   className='w-14  h-full  bg-gray-200 hover:bg-gray-300 cursor-pointer  duration-300   text-sm  text-amazon_blue font-titleFont flex items-center  justify-center  rounded-tl-md        rounded-bl-md ' >  All <span></span>   <ArrowDropDownOutlinedIcon/> 
             </span>
             {
              showAll && (
                <div>
                  <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50 '  >
                  
                    {
                      allItems.map((item)=>(
                        <li key={item._id}   
                        className='text-sm tracking-wide font-titleFont  border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200 ' >
                          {item.title} </li>
                      ))
                    }
                  
                  </ul>
                  </div>
              )
             }
               
               
               <input
                className='h-full text-base flex-grow  text-amazon_blue outline-none  border-none px-2    ' 
               type="text"
               
              />
                <span className='w-12 h-full flex  items-center justify-center bg-amber-300  hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md  rounded-br-md '  >
                <SearchIcon/>
               </span>
            
          </div>

          <Link to="/signin">
                
          <div className='flex  flex-col items-start justify-center  px-2 h-[80%] flex   border border-transparent   hover:border-white   cursor-pointer duration-100   ' >

                { userInfo?(   
                  <p className='text-gray-100 font-medium' > {userInfo.userName} 
                </p> ):(
                  
                 <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light' >Hello,sign in</p>
                  
                )

                }
            {/* <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light' >Hello,sign in</p> */}
            <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex  
            '>Accounts & Lists 
              <span> <ArrowDropDownOutlinedIcon /> </span>
            </p>

          </div>
          </Link>


          <div className=' hidden  lgl:flex flex-col items-start justify-center px-2 h-[80%]    border border-transparent   hover:border-white   cursor-pointer duration-100 ' >
            <p  className='text-xs text-lightText font-light' >Returns </p>
            <p className='text-sm font-semibold  -mt-1 text-whiteText' >& Orders </p>
          </div>
           

         <Link to="/cart">
         <div className='flex items-start justify-center px-2 h-[80%]  border border-transparent   hover:border-white   cursor-pointer duration-100 relative '  >
            <ShoppingCartIcon/>
            <p className='text-xs font-semibold  mt-3  text-whiteText'  >Cart  <span className='absolute  text-xs -top-1 left-6 font-semibold p-1 h-4  bg-[#f3a847] text-amazon_blue flex justify-center items-center rounded-full'> 
               {products.length > 0 ? products.length:0}
            
             </span> </p>
           </div>
         </Link>
          
        { userInfo && (<div onClick={handleLogout}   className='flex flex-col justify-center items-center headerHover relative' >  <LogoutIcon/>  
           <p className='hidden mdl:inline-flex test-xs fint-semiblld text-whiteText'  > 
              Log out </p>
            </div> ) }  
        
 
     </div>

    <HeaderBottom/>
        

  </div>
  )
}

export default Header