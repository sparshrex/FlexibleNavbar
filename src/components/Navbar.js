import React, {  useState } from 'react'
import paytm from '../Images/paytm.png'
import signup from '../Images/signup.png'
import cross from '../Images/btn.png'


function Navbar() {
  const [open,setOpen] = useState(false);

    
    const togglebutton= ()=>{
      const getid =  document.getElementById(1);
      const logo = document.getElementById(2);
      logo.classList.toggle('hidden')
      getid.classList.toggle('hidden');

      if(open===true)
      setOpen(false)
      else
      setOpen(true)
    }


  return (
    <>
    <div className="flex justify-between py-2 px-2 bg-cyan content-center items-center">
      <button className=" flex space-y-1 flex-col  lg:hidden"onClick={()=> togglebutton()}  >
        {
          open?
          <>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          </>
          :
          <>
          <img src={cross} alt="cut"  />
          </>
        }
        
       
     </button>
     
      
      <div className='flex cursor-pointer'>

      <img src={paytm} alt="logo" />
      </div>

      <ul className='hidden lg:space-y-0 lg:flex-none lg:flex lg:flex-row  lg:space-x-5 font-serif font-bold cursor-pointer font-roboto' >
        <li>Paytm for Customer</li>
        <li>Paytm for Business</li>
        <li>Investor Relation</li>
        <li>Company </li>
        <li>Career</li>
      </ul>
     
      <div className='flex cursor-pointer  font-roboto'  >

      <img src={signup} alt="logo" id='2' className='hidden lg:flex' />
      </div>
     
    </div>

        <div className='h-0.5 bg-black bg-opacity-10'></div>

    <div>
    <ul className='flex flex-col space-y-3 px-2 py-2  lg:hidden  font-bold font-roboto' id='1'>
        <li>Paytm for Customer</li><hr  className='bg-black w-60 bg-opacity-10'/>
        <li>Paytm for Business</li><hr  className='bg-black w-60 bg-opacity-10'/>
        <li>Investor Relation</li>
        
        </ul>

    </div>
    </>
  )
}

export default Navbar
