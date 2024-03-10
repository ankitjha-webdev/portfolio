import React from 'react'
import rnar from '../../assets/rnar.webp';
export const Intermediate = () => {
  return (
    <div className=''>
    <div className="about__cards1" style={{width:'100%'}}>
            <article className="about__card1" >
              <img src={rnar} alt="cutm" style={{width:'10%', borderRadius:"2rem", margin:"auto", }} className="about_icon1"/>
              <h3>Ram Nirikshan Atma Ram College, Samastipur</h3>
              <h5>Intermediate in Science (Math)</h5>
              <div style={{display:"flex", marginTop:"1rem" }}>
              <small>Board: BSEB</small>
              <small style={{ marginLeft: "5rem"}}> July 2019</small>
              </div>
            </article>
          </div>
  </div>
  )
}
