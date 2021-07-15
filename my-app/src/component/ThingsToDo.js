import React from 'react'
import {Carousel} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

function ThingsToDo() {
  return (
            <div>
                <Carousel className="about-image">
                    
                              <Carousel.Item>
                                <img className = "todo" src="https://i.pinimg.com/originals/51/5a/75/515a757fbe92d8273442fdaab02dcf04.png"  width="1800" height="900"/>
                               
                              </Carousel.Item>
                            
                    
                              <Carousel.Item>
                                <img className = "todo" src="https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1468123073306-QVCM88JW71C83O3XO748/ke17ZwdGBToddI8pDm48kJfSPtfOJWis-4HwS2UffyIUqsxRUqqbr1mOJYKfIPR7qPMk0p3IHmLoUpLadMHyzIZ_PIT2Qv94SwsoGTQcqCErN1-8Q_X9ldEXlc8wrw7gInPi9iDjx9w8K4ZfjXt2dnFkZJQFgiGj4-1xI4Lcxm0isKgA55dC5MHRlyyS51k_ZDqXZYzu2fuaodM4POSZ4w/adve.jpg?format=1500w" width="1800" height="900"/>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img className = "todo" src="https://booking-manager-api.s3.eu-west-1.amazonaws.com/27/blob" width="1800" height="900"/>
                              </Carousel.Item>
                              
                </Carousel>
            </div>
        )
    }



export default ThingsToDo
