import React from 'react'
import cutm from '../../assets/cutm.jpg';

export const Bachelor = () => {
  return (
    <div className=''>
      <div className="about__cards1" style={{width:'100%'}}>
            <article className="about__card1" >
              <img src={cutm} alt="cutm" style={{width:'10%', borderRadius:"50%", margin:"auto"}} className="about_icon1"/>
              <h3>Centurion University of Technology and Management</h3>
              <h5>B.Tech in CSE</h5>
              <div style={{display:"flex", marginTop:"1rem" }}>
              <small>University: CU</small>
              <small style={{ marginLeft: "5rem"}}> March 2023</small>
              </div>
            </article>
          </div>
    </div>
  )
}
