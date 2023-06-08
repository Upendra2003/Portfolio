import React from 'react'
import Image1 from '../../Assets/Interests_Images/img1.svg'
import Image2 from '../../Assets/Interests_Images/img2.svg'
import Image3 from '../../Assets/Interests_Images/img3.svg'
import Image4 from '../../Assets/Interests_Images/img4.svg'
import Image5 from '../../Assets/Interests_Images/img5.svg'
import Image6 from '../../Assets/Interests_Images/img6.svg'
import '../../Pages/About/About.css'

export default function Interests() {
  return (
    <>
      <div className="interests">
        <h2>MY INTERESTS</h2>
        <div className="images">
          <img src={Image1} alt="img1" />
          <img src={Image2} alt="img2" />
          <img src={Image3} alt="img3" />
          <img src={Image4} alt="img4" />
          <img src={Image5} alt="img5" />
          <img src={Image6} alt="img6" />
        </div>
      </div>
    </>
  )
}
