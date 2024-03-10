import React from 'react'
import bseb from '../../assets/bseb.jpg';
export const Matriculation = () => {
  return (
    <div className=''>
   <div className="about__cards1" style={{width:'100%'}}>
            <article className="about__card1" >
              <img src={bseb} alt="cutm" style={{width:'10%', borderRadius:"2rem", margin:"auto", }} className="about_icon1"/>
              <h3>Pusa High School, Samastipur</h3>
              <h5> Matriculation(10th) </h5>
              <div style={{display:"flex", marginTop:"1rem" }}>
              <small>Board: BSEB</small>
              <small style={{ marginLeft: "5rem"}}> April 2017</small>
              </div>
            </article>
          </div>
  </div>
  )
}
