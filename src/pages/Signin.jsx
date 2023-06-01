import React, { useState } from "react";
import { darklogo } from "../assets/index";
import { logo } from "../assets/index";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {Link ,useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";
 import { setUserInfo } from "../redux/amazonSlice";

import { RotatingLines } from  'react-loader-spinner';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
             
           const auth = getAuth();
           const navigate=useNavigate();

       const dispatch=useDispatch();
       const[email,setEmail]=useState("");
       const[password,setPassword]=useState("");
       const[errEmail,setErrEmail]=useState("");
       const[errPassword,setErrPassword]=useState("");

       //firebase  
         const [loading,setLoading]=useState(false);
         const [successMsg,setSuccessMsg]=useState("");
         const [userEmailErr,setUserEmailErr]=useState("");
         const [userPassErr,setUserPassErr]=useState("");


          const handleEmail=(e)=>{
            setEmail(e.target.value);
            // console.log(email);
            setErrEmail("");
          }

          const handlePassword=(e)=>{
            setPassword(e.target.value);
            // console.log(password);
            setErrPassword("");
          }

           // Email validation start 
              const emailValidation=(email)=>{
             return String(email).toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
              };

      const handleLogin=(e)=>{
        e.preventDefault();

        if(!email){
          setErrEmail("Please enter your email or mob.number");
        }else{
          if(!emailValidation(email)){setErrEmail("Enter a valid email")}
        }

        if(!password){
          setErrPassword("Please enter your password");
        }
           

          
        if( email && emailValidation(email)&&password &&password.length>=6 ){  
          console.log(email,password )    
                
          setLoading(true);
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
                // console.log(user)
                dispatch(setUserInfo({
                       _id:user.uid,
                       userName:user.displayName,
                       email:user.email,
                       image:user.photoURL 

                }))

                setLoading(false);
                setSuccessMsg("Logged in Successfully ! Welcome you back !");

                setTimeout(()=>{
                  navigate("/")
                },2000)

          })
          .catch((error) => {
               setLoading(false);
               const errorCode=error.code;
               if(errorCode.includes("auth/invalid-email")){
                setUserEmailErr("Invalid Email");
               }

               if(errorCode.includes("auth/wrong-password")){
                setUserPassErr("Wrong password! try again");
               }
               console.log("Something is up,Try with correct Credential!")
          })




          setEmail("")
          setPassword("")
             
        
    }
          
      };


 
       
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 h-[80vh]     ">
          {
              successMsg ? ( 
              <div  className="w-full flex justify-center items-center py-32" >
                  <p className="border-[1px] border-green-600 text-green-500 font-titleFont text-lg font-semibold px-6 py-2  " > {successMsg} </p>  
              </div> ) :(  <form className="w-[350px]  mx-auto   flex flex-col items-center">
              {/* <img className="w-29 text-black " src={logo} alt="" /> */}
              <p>Login Here</p>
    
          <div className="w-full border border-zinc-200 mt-10  p-6">
                <h2 className="font-titleFont text-3xl font-medium mb-4   ">
                  {" "}
                  Sign in{" "}
                </h2>
              <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 ">
                    <p className="text-sm font-medium">
                      {" "}
                      Email or mobile phone number{" "}
                    </p>
                    <input 
                        onChange={handleEmail}
                        value={email}
                      type="email"
                      className="w-full lowercase py-1 border  border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput  duration-300  "
                    />
                    {errEmail && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                        {" "}
                         <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>   {errEmail}{" "}
                       </p> 
                    )}
                     {userEmailErr && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                        {" "}
                         <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>   { userEmailErr}{" "}
                       </p> 
                    )}
                           
    
     
                      
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className="text-sm font-medium">Password </p>
                    <input  
                       onChange={handlePassword}
                       value={password}
                      type="email"
                      className="w-full lowercase py-1 border  border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput  duration-300  "
                    />
                    {errPassword && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                        {" "}
                         <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>   {errPassword}{" "}
                      </p> 
                    )}
    
                     {userPassErr && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                        {" "}
                         <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>   { userPassErr}{" "}
                       </p> 
                    )}
                  </div>
    
                  <button
                    onClick={handleLogin}
                    className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 acttive:border-yellow-800  active:shadow-amazonInput  "
                  >
                    Continue
                  </button>
                             
                  {
                      loading && (
                           <div className="flex justify-center"  > 
                             <RotatingLines
                             strokeColor="#febd69"
                             strokeWidth="5"
                             animationDuration="0.75"
                             width="96"
                             visible={true}
                           />
                           </div>
                      )
                     }
    
           </div>
                <p className="text-xs  text-black leading-4 mt-4 ">
                  By Continuing,you agree to Amazon's{" "}
                  <span className="text-blue-600">Conditions of Use </span>and{" "}
                  <span className="text-blue-600">Privacy Notice.</span>{" "}
                </p>
    
                <p className="text-xs text-gray-600  mt-4 cursor-pointer group ">
                  {" "}
                  <ArrowRightIcon />{" "}
                  <span className="text-blue-600  group-hover:text-red-700   group-hover:underline-offset-1  ">
                    {" "}
                    Need help ?{" "}
                  </span>{" "}
                </p>
     </div>
              <p className="w-full text-xs text-gray-600 mt-4 flex items-center ">
                <span className="w-1/3  h-[1px]  bg-zinc-600 inline-flex"> </span>
                <span className="w-1/3  text-center">New to Amazon?</span>
                <span className="w-1/3 h-[1px]  bg-zinc-600 inline-flex "></span>
              </p>
             <Link to="/signup"  className="w-full" >
             <button
                // onClick={(e) => e.preventDefault()}
                className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm  bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800  active:shadow-amazonInput"
              >
                {" "}
                Create Your Amazon account{" "}
              </button>
             </Link>
            </form>)
          }   

      </div>

      <div className="  w-full bg-gradient-to-t from-white via-white to-zinc-200  flex flex-col gap-4 justify-center items-center p-10   ">
        <div className="flex  items-center gap-6 items-center  justify-center  " >  
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100"  >
              Conditions of Use
            </p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100"  >
              Privacy Notice 
            </p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100"  >
              Privacy Notice
            </p>
            
             
    
        </div>

        <p className="text-xs text-gray-600"  > &#169; 1996-2023,ReactBD.com, Inc. or its affiliates </p>

      </div>
    </div>
  );
};

export default Signin;
