import React from 'react'
import notFoundIcon from '../assets/notFound.png'
const PageNotFound = () => {
  return (
    <div className='notfound'>
        <img src={notFoundIcon} alt='404 not found'/>
        Page Not Found</div>
  )
}

export default PageNotFound