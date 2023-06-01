import Header from "./components/header/Header";
// import Banner from "./components/home/Banner";
// import Footer from "./components/footer/Footer";
import Footer from "./components/footer/Footer.jsx";

import { createBrowserRouter,createRoutesFromElements,Outlet,Route,RouterProvider,ScrollRestoration, } from "react-router-dom";
import Home from "./pages/Home";
import { productsData } from "./api/api";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";

const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


function App() {
       
     const router=createBrowserRouter(createRoutesFromElements(
          <>
           <Route path="/" element={ <Layout/> }>

            <Route index  element={<Home/>}  loader={productsData}  ></Route>
            <Route  path="/cart" element={<Cart/>} ></Route>
            
           </Route>
           <Route  path="/signin" element={<Signin/>}  />
           <Route path="/signup" element={<Registration/>}  />
           </>
        
            
  
     ));

  return (
    <div className="font-bodyFont  " >
          {/* <Header/>
          <Banner/>
          <Footer/> */}

          <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
