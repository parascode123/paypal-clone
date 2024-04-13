import { } from 'react'
import { Footer } from './Footer.jsx'
import './App.css'
import { HorizontalCard } from './Card'
import { HorizontalCard2 } from './.Card-2.jsx'
import { HorizontalCard3 } from './Card3.jsx'
import { HorizontalCard4 } from './Card4.jsx'
import { HorizontalCard5 } from './Card5.jsx'
function App() {


  return (
    <>
    <section className='sec-1'>
   <nav className="p-4 shadow-sm">
   
  
    <div className=" top-nav nav-items flex justify-between  flex-row">
      <div className='  w-8/12 flex flex-row'><div className="logo w-6">
      <img src='/paypal.svg'/>
    </div>
    <ul className='  flex flex-row w-80 text-sm justify-between mx-4 '>
      <li>Personal</li>
      <li>Buisiness</li>
      <li>Developer</li>
      <li>Help</li>
    </ul></div>
    
    <div className="nav-btns ">
      <button className=  '  rounded-full text-sm  border-blue-950 btn-primary py-1 px-4 mx-2'>
        Log in
      </button>
      <button className='bg-blue-500 rounded-full text-sm text-white  px-4 py-1 mx-2'>
        Sign up
      </button>
    </div>
    </div>
    
   
   
   </nav>
   <div className=
   "container-1 flex flex-row sec-div justify-between  ">
  
    <div className='text-cont div-1  p-8 w-[400px]'><p className='font-bold'>Manage your money</p>
    <h3 className="text-4xl  text-blue-700 mt-2 font-bold">Finesse Your finances</h3><p className='mt-2'>more flexibility,more freedom,more choices.we have so many ways to organize your personal finances-on the go or on the couch</p>      <button
        className=" mt-4 select-none rounded-full bg-blue-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
       Get the App
      </button>
      <button
    className=" mt-4 mx-3 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
    type="button">
    Sign up
  </button></div>
   
    <div className=' img-cont mt-32 p-2   relative'>
      <div className="background-img " ></div>
      <div className=' yellow-div    bg-yellow-600'></div>
      <svg className="svg">
  <clipPath id="clip" clipPathUnits="objectBoundingBox"><path d="M0.405,0.004 H0.954 H1 V0.989 L0.003,1 C0.003,1,0.15,0.478,0.206,0.27 C0.261,0.062,0.252,0.004,0.405,0.004"></path></clipPath>
</svg>




</div>
</div>
   


    </section>
    <section className='sec-2 mb-96 h-[900px]'>
      <div className='blue-div'></div>
      <div className="grid-box grid place-items-center">
      <div className='cards-pay mt-[110px] grid  sm:grid-rows-12 sm:grid-cols-12 gap-6 w-8/12 mx-auto h-[1700px] '>
        <div className="font-bold  rounded-lg bg-blue-600 sm:col-span-6 sm:row-span-2 min-h-[200px] "><span className="block mt-48 p-6 text-white text-xl">Add cash <img className="size-6 inline-block "src="/arrow-right.svg" alt="" /></span></div>
        <div className="font-bold    bg-card-2 rounded-lg   sm:col-span-6 sm:row-span-4 min-h-[200px]" ><span className="block mt-4 shadow-sm p-6 text-white text-xl">Pay Bills<img className="size-6 inline-block "src="/arrow-right.svg" alt="" /></span></div>
        <div className="font-bold   bg-card-3 rounded-lg  sm:row-span-4 sm:col-span-6 min-h-[200px]" ><span className="block  shadow-sm p-6 text-white text-xl mt-126">Buy and sell crypto<img className="size-6 inline-block "src="/arrow-right.svg" alt="" /></span></div>
        <div className="font-bold   bg-card-4 rounded-lg sm:row-span-2 sm:col-span-6 min-h-[200px] bg-blue-300"><span className="block mt-4 shadow-sm p-6 text-white text-xl">Savings<img className="size-6 w- inline-block "src="/arrow-right.svg" alt="" /></span></div>
        <div className=" font-bold  bg-card-5 rounded-lg  sm:row-span-2 sm:col-span-7 min-h-[200px]" ><span className="block  shadow-sm p-6 text-white text-xl mt-48 bold">Set a direct deposit <img className="size-6 inline-block "src="/arrow-right.svg" alt="" /></span></div>

        <div className=" font-bold bg-card-6 rounded-lg bg-blue-600 sm:col-span-5 sm:row-span-2 min-h-[200px] "><span className="block mt-48 p-6 text-white text-xl">Cash a check<img className="size-6 inline-block "src="/arrow-right.svg" alt="" /></span></div>
       
      </div>
      </div>
     
    </section>
    <section className='sec-3 mt-96 top-[80px] relative'><div className='women-img  bg-red-500'>
     <svg className="svg">
  <clipPath id="clip-2" clipPathUnits="objectBoundingBox"><path d="M0.996,0.003 H0.002 V1 H0.13 C0.2,1,0.214,0.672,0.292,0.522 C0.37,0.371,1,0.942,0.996,0.003"></path></clipPath>
</svg><svg className="svg">
  <clipPath id="clip-3" clipPathUnits="objectBoundingBox"><path d="M0.601,1 H0.052 H0.003 V0.018 L1,0.004 C1,0.004,0.856,0.529,0.801,0.737 C0.745,0.945,0.754,1,0.601,1"></path></clipPath>
</svg>



</div>
<div className='absolute add-box  bottom-10 font-bold text-3xl left-1/3 w-[406px]'>Payday's here.Bills? Paid.<br/>Spend a little.Save the rest.Watch your  money grow.Breathe easy.<span className="text-blue-500">Your<br/> money matters?All in one<br/>  app.</span></div>


    </section>
    <section className='sec-3'>
      <div className="cards-adv flex flex-col gap-8">
      <HorizontalCard />
    <HorizontalCard2/>
    <HorizontalCard3 />
      </div>
   
    </section>
    <section className='sec-4 w-full'>
    
      <div className=' flex align-center  justify-center text-3xl p-24'>
        More ways to manage your money
      </div>
      <HorizontalCard5/>
      <HorizontalCard4 />
      <Footer/>
    </section>
    </>
  )
}

export default App
