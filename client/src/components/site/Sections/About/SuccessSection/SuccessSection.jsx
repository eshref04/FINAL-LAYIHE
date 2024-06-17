import React from 'react'
import "./SuccessSection.scss"
import Icon1 from  "../../../../../assets/success-icon1.png"
import Icon2 from  "../../../../../assets/success-icon2.png"
import Icon3 from  "../../../../../assets/success-icon3.png"
import BgImage from "../../../../../assets/success-bg.jpg"

const SuccessSection = () => {
  return (
    <section className='success__section'>
    <div className='success__section__border'
    style={{ padding: "100px 80px 65px 80px" }}>
    <div
  className="success__section__border__wrapper container"
  
  data-skin="Our Philosophy"
  id="gdlr-core-wrapper-2"
>
  
  <div
                className="success__section__border__wrapper__crd"
                style={{ paddingBottom: 30 }}
              >
               
                  <img
                    src={Icon1}
                    alt=""
                    width={"35px"}
                    height={"50px"}
                    title="law-icon-1"
                  />
                
                
                 
                    <h3
                     
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: 3
                      }}
                    >
                      Our Philosophy
                    </h3>
            
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart.
                    </p>
                 
                
              </div>
        
              <div
                className="success__section__border__wrapper__crd"
                style={{ paddingBottom: 30 }}
              >
               
                  <img
                    src={Icon2}
                    alt=""
                    width={"35px"}
                    height={"50px"}
                    title="law-icon-1"
                  />
                
                
                 
                    <h3
                      
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: 3
                      }}
                    >
                      OUR PRINCIPLE
                    </h3>
            
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart.
                    </p>
                 
                
              </div>
              <div
                className="success__section__border__wrapper__crd"
                style={{ paddingBottom: 30 }}
              >
               
                  <img
                    src={Icon3}
                    alt=""
                    width={"45px"}
                    height={"50px"}
                    title="law-icon-1"
                  />
                
                
                 
                    <h3
                      
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: 3
                      }}
                    >
                      KEY OF SUCCESS
                    </h3>
            
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart.
                    </p>
                 
                
              </div>
        
      </div>
    </div>
     
     

    </section>
  )
}

export default SuccessSection
