import React from 'react'
import {Carousel} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

function ThingsToDo() {
  return (
            <div>
                <Carousel className="about-image">
                    
                              <Carousel.Item>
                                <img className = "todo" src="https://www.luxuryholidaynepal.com/uploads/img/nepal-and-unesco-world-heritage-sites.jpeg"/>
                               
                              </Carousel.Item>
                            
                    
                              <Carousel.Item>
                                <img className = "todo" src="https://1.bp.blogspot.com/-TS1RrlvEzQo/Xsn4_cSXZpI/AAAAAAAAIFU/hBROs7xoxT4uDVVyqx0ruAHIXe-FZ1fyQCLcBGAsYHQ/w600-h315-p-k-no-nu/Nepal%2527s%2Bmost%2Bbeautiful%2Bplace.jpg"/>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img className = "todo" src="https://www.luxuryholidaynepal.com/uploads/img/top-tourist-attractions-in-nepal.jpeg"/>
                              </Carousel.Item>
                </Carousel>
            </div>
        )
    }



export default ThingsToDo
