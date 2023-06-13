import React from 'react'

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <>
        <div className="line"></div>
        <div className="footer text-white">
            <p className=' text-center p-2 text-xs'>&copy;-Upendra | {year} All Rights Reserved</p>
        </div> 
    </>
  )
}
