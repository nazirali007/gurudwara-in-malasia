import React from 'react'

const BannerUsable = (props) => {
    // console.log(props.data[0].img);
  return (
    <>
     <div className="container-fluid position-relative color-primary-bg p-0">
     <img src={props.data[0].img} className='img-fluid w-100 m-0 img-opacity'  alt="" />  
        <div className="w-100 text-white position-absolute top-50 left-50 text-center " >
            <h1>{props.data[0].title}</h1>
        </div>
     </div>   
   </>
  )
}

export default BannerUsable