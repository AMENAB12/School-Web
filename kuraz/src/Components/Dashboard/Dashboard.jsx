import React from 'react'
import image from '../../assets/undraw_book_lover_mkck (1).png'
import './Dashboard.css'
function Dashboard() {
  return (
    <section id='dashboard'>
<div className='flex justify-center'>
<div>
<img src={image} alt="" />
</div>
<div className='justify-end'>
<h2 className='dashboard-text font-semibold text-lg'>St.JHONBAPTIST <br /> DELASALLE CATHOLIC <br /> SHOOL</h2>
<h4 className='dashboard-small-text'>Are you a student parent or teacher ? <br /> sign in to access the dashboard</h4>
<div className='button w'>
  <button className=' justify-end'>
    SIGN IN
  </button>
</div>
</div>
</div>
    </section>
  )
}
export default Dashboard