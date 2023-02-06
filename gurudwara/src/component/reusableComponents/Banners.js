import React from 'react'

const Banners = (props) => {
  return (
   <>
     <div className="container-fluid position-relative color-primary-bg p-0">
     <img src="/images/about-banner-img.png" className='img-fluid w-100 m-0 img-opacity'  alt="" />  
        <div className="w-100 text-white position-absolute top-50 left-50 text-center " >
            <h1>{props.title}</h1>
        </div>
     </div>   
   </>
  )
}

export default Banners
