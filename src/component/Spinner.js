import React from 'react'
// import PropTypes from 'prop-types'
import Loading from "./loading.gif"
// import newimg from "./newimg.png"
const Spinner =()=> {
    return (
      <div className='text-center' >
        <img src={Loading} alt="loading" />
      </div>  
    )
  
}

export default Spinner
