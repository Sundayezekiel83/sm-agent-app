import React from 'react'
import SingleProperty from './SingleProperty'
import Home2 from '../../../assets/images/home2.jpg'
import Home3 from '../../../assets/images/home3.jpg'
import Home4 from '../../../assets/images/home4.jpg'
import Home5 from '../../../assets/images/home5.jpg'

const MyProperties = () => {
  return (
        <div className='container py-8 mx-auto'>
            <div className='row'>
            <h5 className='font-bold text-2xl font-bold'>12 Properties are avaliable</h5>
           
                 <SingleProperty propertyName={"5 Bedroom flat"}  propertyLocation={"Holy Trinity Junction, Ondo city"}
                propertyPrice={"$8000"} propertyDuration={"3 Year Lease required"} propertyAvaliablity={"avaliable"} noLease ={"3"}
                propertyImage={Home5}
                />

                <SingleProperty propertyName={"5 Bedroom flat"}  propertyLocation={"Holy Trinity Junction, Ondo city"}
                propertyPrice={"$8000"} propertyDuration={"3 Year Lease required"} propertyAvaliablity={"avaliable"} noLease ={"3"}
                propertyImage={Home2}
                />
                 <SingleProperty propertyName={"5 Bedroom flat"}  propertyLocation={"Holy Trinity Junction, Ondo city"}
                propertyPrice={"$8000"} propertyDuration={"3 Year Lease required"} propertyAvaliablity={"avaliable"} noLease ={"3"}
                propertyImage={Home3}
                />
                <SingleProperty propertyName={"5 Bedroom flat"}  propertyLocation={"Holy Trinity Junction, Ondo city"}
                propertyPrice={"$8000"} propertyDuration={"3 Year Lease required"} propertyAvaliablity={"avaliable"} noLease ={"3"}
                propertyImage={Home4}
                />
                </div>
                            
        </div>
    
  )
}

export default MyProperties