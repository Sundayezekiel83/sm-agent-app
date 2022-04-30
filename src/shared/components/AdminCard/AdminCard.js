import React from 'react'
import './AdminCard.css'

const AdminCard = ({ icon, title, subtitle1, subtitle2}) => {
  return (
    <>
  
      <div className='col-md-3 mt-4 text-center'>
        <div className="card-counter">
     <div className='icon'> {icon} </div>
        <h1 className='bold'>{title}</h1>
        <small className='subtitle'> {subtitle1}</small>
        <p></p>
        <h3 className='subtitle2 font-weight-bold mt-3'>{subtitle2}</h3>
      </div>
      </div>
       </>   
      
   
  )
}

export default AdminCard
