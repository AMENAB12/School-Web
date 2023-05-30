import React from 'react'
import './Nav.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import {Link} from 'react-scroll'
function Nav() {
  return (
    <nav>
        <div className='flex justify-end p-15 cursor-pointer'>

<div className='text pt-4 '>
   <Link
   className='m-3 hover:text-blue-500'>
   HOME
   </Link>
   <Link
   className='m-3 hover:text-blue-500'
   >
   DASHBOARD
   </Link>
   <Link
   className='m-3 hover:text-blue-500'
   >
   GALLERY
   </Link>
   <Link
   className='m-3 hover:text-blue-500'
   >
   ABOUT US
   </Link>
   <Link
   className='m-3 hover:text-blue-500'
   >
   CONTACT
   </Link>
</div>
<div className=' shadow-lg icon-color rounded-bl-lg'>
<FaEnvelope className='m-2 hover:bg-blue-400 '/>
<FaPhone className='m-2 hover:bg-blue-400'/>
</div>
        </div>
    </nav>
  )
}
export default Nav