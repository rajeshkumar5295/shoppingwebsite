import React, { useState } from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link ,useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import { RotatingLines } from  'react-loader-spinner';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";





const Registration = () => {

     const auth = getAuth();

     const navigate=useNavigate()

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const [cPassword,setCPassword ] = useState("");
    
  // Error Message start
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [firebaseErr,setFirebaseErr]=useState("");

  // Loading funtion start here
   const[loading,setLoading]=useState(false);
   const[successMsg,setSuccessMsg]=useState("");

   //Handle funtion start  
  const handleName = (e) => {
    setClientName(e.target.value);
    // console.log(clientName); 
    setErrClientName("");
  };
   
  const handleEmail=(e)=>{
    setEmail(e.target.value);
    // console.log(email);
    setErrEmail("");
  };
   
   const handlePassword=(e)=>{
       setPassword(e.target.value);

      //  console.log(password);
        setErrPassword("");
     
   };
 
   const handleCPassword=(e)=>{
                  setCPassword(e.target.value);
                  // console.log(cPassword)
                  setErrCPassword("");
   };
   
     // Email validation start 
       const emailValidation=(email)=>{
        return String(email).toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
       };
    
    

          
     

  //submit button start
  const handleRegistration = (e) => {
    e.preventDefault(); 
       if (!clientName) {
      setErrClientName("Enter your name");
    }
 
    if(!email){
      setErrEmail("Enter your Email");
      setFirebaseErr("");
    }else{
       if(!emailValidation(email)){setErrEmail("Enter a valid email")}
    }
       
    if(!password ){
      setErrPassword("Enter you password ");
    }else{
       if(password.length<6){
        setErrPassword("Password must be at least 6 characters");
             
       }
    }  
      
   if(!cPassword){
      setErrCPassword("Confirm your password");
    }
    else if(cPassword !== password){
          setErrCPassword("password not matched"); 
        }
    
        
        if(clientName && email && emailValidation(email)&&password &&password.length>=6 && cPassword===password ){  
                console.log(clientName,email,password,cPassword )  
                
                 setLoading(true)
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in 
                  

                    updateProfile(auth.currentUser,{
                       displayName:clientName,
                       photoURL:"https://i0.wp.com/www.wikiblogon.in/wp-content/uploads/2023/03/HD-wallpaper-kriti-shetty-actress-krithi-krithi-shetty-krithishetty-kritishetty-telugu-actress-telugu-movie-uppena-thumbnail.jpg",
                    })
                    const user = userCredential.user;
                     setLoading(false);
                     setSuccessMsg("Account Created Successfully");
                  console.log(user);
                    
                     setTimeout(()=>{
                      navigate("/signin")
                     },3000)
                  
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                    if(errorCode.includes("auth/email-already-in-use")){
                      setFirebaseErr("Email Already in use,Try another one")
                    }

                         

                  // console.log(errorCode,errorMessage);
                  // ..
                });
                   

                setClientName("")
                setEmail("")
                setPassword("")
                setCPassword("")    
                setErrCPassword("")
                setFirebaseErr("")
              
          }
    
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10  ">
        <form className="w-[370px] mx-auto flex flex-col items-center  ">
          {/* <img className="w-29 text-black " src={logo} alt="" /> */}
          <p>Sign UP Here </p>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium "> Your Name </p>
                <input 
                  onChange={handleName}
                  value={clientName}
                  type="text"
                  className="w-full  py-1 border  border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput  duration-100 "
                />
                 
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {" "}
                     <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>   {errClientName}{" "}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium "> Email or phone number </p>
                <input
                   onChange={handleEmail}
                  value={email}
                  type="email"
                  className="w-full py-1 border  border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput  duration-100 "
                />
              </div>
              
              {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {" "}
                     <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>   {errEmail}{" "}
                  </p> 
                )}
                 
                 {firebaseErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {" "}
                     <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>   {firebaseErr}{" "}
                  </p> 
                )}



              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium "> Password </p>
                <input
                  
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  className="w-full  py-1 border  border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput  duration-100 "
                />

                  {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {" "}
                     <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>     {errPassword}{" "}
                  </p>
                )}    

              </div>
              
           
                        
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium "> Re-enter Password </p>
                <input 
                  onChange={handleCPassword} 
                  value={cPassword}
                  type="password"
                  className="w-full  py-1 border  border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput  duration-100 "
                /> 
                  
               {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {" "}
                     <span className="italic font-titleFont font-extrabold texxt-base" > ! </span>{errCPassword}{" "}
                  </p>
                )}

                <p className="text-xs text-gray-600">
                  {" "}
                  Passwords must be at least 6 characters{" "}
                </p>
              </div>
                
                 
             

              <button
                onClick={handleRegistration}
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

                 {
                   successMsg && (
                    <div> 
                         <motion.p  
                            initial={{y:10,opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{duration:0.5}}
                            className="text-base font-titleFont font-semibold border-green-500 px-2 text-center"
                           >
                           { successMsg }
                         </motion.p>
                    </div>
                   )
                 }

            </div>
            <p className="text-xs  text-black leading-4 mt-4 ">
              By Continuing,you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use </span>and{" "}
              <span className="text-blue-600">Privacy Notice.</span>{" "}
            </p>
            <div>
              <p className="text-xs text-balck">
                {" "}
                Already have an account?
                <Link to="/signin">
                  {" "}
                  <span className="text-xs  text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Sign in{" "}
                    <span>
                      {" "}
                      <ArrowRightIcon />{" "}
                    </span>{" "}
                  </span>{" "}
                </Link>
              </p>

              <p className="text-xs text-balck -mt-2">
                {" "}
                Buying for work?{" "}
                <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                  Create a free business account
                </span>{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="  w-full bg-gradient-to-t from-white via-white to-zinc-200  flex flex-col gap-4 justify-center items-center p-10   ">
        <div className="flex  items-center gap-6 items-center  justify-center  ">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>

        <p className="text-xs text-gray-600">
          {" "}
          &#169; 1996-2023,ReactBD.com, Inc. or its affiliates{" "}
        </p>
      </div>
    </div>
  );
};

export default Registration;
