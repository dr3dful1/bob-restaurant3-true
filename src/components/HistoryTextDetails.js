import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselPage from './CarouselPage'

function HistoryTextDetails(){

    return(
        <div className="container">

        <div className="jumbotron">

             
            
                <div className="container aboutustext" >

                 address: 1600 w Slauson Ave 
                        Los Angeles, CA 90047
                        <hr/>
                        <hr/>
                        Phone Number: 323-880-8331
                        <hr/>
                        <hr/>
                        Business Hours:<br/>
                        m-f:10a-7p <br/>
                        Sat-sun: 10a -7p

                    
                    
                 </div>
              
                 
             
    </div>
                      
</div>     
    )
}

export default HistoryTextDetails