import React, { useState } from 'react';
import Slider from "react-slick";

import { bannerImgFive } from '../../assets';

import { am1 } from '../../assets';
import {am2 } from '../../assets'
import{ am3 }from '../../assets';
import {am8} from '../../assets'
import {am4 } from "../../assets"


const Banner = () => {


     const[dotActive,setDocActive]=useState(0);

    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,

        beforeChange:(prev,next)=>{
          setDocActive(next);
        },

      //  appendDots: dots => (
      //     <div
      //       style={{
      //             position:"absolute",
      //             top:"70%",
      //             left:"0",
      //             right:"0",
      //             margin:" 0  auto",
      //             transform:"translate(-50%,-50%)",
      //             width:"210px",
      //       }}
      //     >
      //       <ul style={{ width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between" }}> {dots} </ul>
      //     </div>
      //   ),
      //   customPaging: i => (
      //     <div
      //       style={
      //         i==dotActive
      //         ? {
      //             width:"30px",
      //             height:"30px",
      //             borderRadius:"50%",
      //             display:"flex",
      //             alignItems:"center",
      //             justifyContent:"center",
      //             color:"white",
      //             background:"#131921",
      //             padding:"8px 0",
      //             cursor:"pointer",
      //             border:"1px solid #f3a847"
      //       }:{
      //         width:"30px",
      //         height:"30px",
      //         borderRadius:"50%",
      //         display:"flex",
      //         alignItems:"center",
      //         justifyContent:"center",
      //         color:"white",
      //         background:"#131921",
      //         padding:"8px 0",
      //         cursor:"pointer",
      //         border:"1px solid white"
      //   }
          
      //     }
      //     >
      //       {i + 1}
      //     </div>
      //   ),
      //   responsive: [
      //     {
      //       breakpoint: 576,
      //       settings: {
      //           dots:true,
      //           appendDots:(dots)=>(
      //             <div 
      //             style={
      //               {
      //                 position:"absolute",
      //                 top:"70%",
      //                 left:"0",
      //                 right:"0",
      //                 margin:"0 auto",
      //                 transform:"translate(-50%,-50%)",
      //                 width:"150px"

      //               }
      //             }
      //             >
      //               <ul   
      //                  style={{width:"100px" ,display:"flex",alignItems:"center",justifyContent:"space-between" }} 
      //                > {dots} </ul>

      //             </div>
      //           ),
      //           customPaging:(i)=>(
      //             <div  
      //                 style={
      //                   i==dotActive
      //                   ?{
      //                     width:"20px",
      //                     height:"20px",
      //                     borderRadius:"50%",
      //                     display:"flex",
      //                     alignItems:"center",
      //                     justifyContent:"center",
      //                     color:"white",
      //                     background:"#131921",
      //                     padding:"8px 0",
      //                     cursor:"pointer",
      //                     border:"1px solid, #f3a847",
      //                     fontSize:"12px",

      //                   }
      //                   :{
      //                     width:"20px",
      //                     height:"20px",
      //                     borderRadius:"50%",
      //                     display:"flex",
      //                     alignItems:"center",
      //                     justifyContent:"center",
      //                     color:"white",
      //                     background:"#131921",
      //                     padding:"8px 0",
      //                     cursor:"pointer",
      //                     border:"1px solid, white",
      //                     fontSize:"12px",
      //                   }

      //                 }
      //              >  
      //              { i+1 }
      //             </div>
      //           ),
      //       },
      //     },
     
      //   ],

        
      };

  return (
    <div className='w-full'>
    
       <div className='w-full h-full relative'>
       <Slider {...settings}>
          <div>
            <img  className='h-[400px]     mdl:w-[1350px] mdl:h-[750px]'     src={am1} alt=""/>
          </div>
          <div>
            <img className=' h-[400px]  mdl:w-[1350px]  mdl:h-[750px]' src={am2} alt=""/>
          </div>
          <div>
            <img className='h-[400px] mdl:w-[1350px] mdl:h-[750px]'    src={am8} alt=""   />
          </div>
          <div>
            <img   className='h-[400px] mdl:w-[1350px]  mdl:h-[750px]'     src={am4} alt=""/>
          </div>
          <div>
            <img  className='h-[400px] mdl:w-[1350px]  mdl:h-[750px]'     src={bannerImgFive} alt=""/>
          </div>
          
        </Slider>
       </div>

      </div>
  )
}

export default Banner;