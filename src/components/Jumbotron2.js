import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
 
import CarouselPage from './CarouselPage'
function Jumbotron2(){


    return(
        <div className="container">

            <div className="jumbotron">
               <CarouselPage />
            </div>
        </div>
    )
}
 

export default Jumbotron2