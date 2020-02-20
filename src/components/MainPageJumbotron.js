import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselPage from './CarouselPage'
function MainPageJumbotron(){


    return(
        <div className="container">

            <div className="jumbotron">
                <div className="titleText">
                    
                </div>
                <div className="mainCarousel">
                    <Carousel showThumbs={false}>
                    <div>
                        <img src="entrees.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="sides.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="entrees.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="sides.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="entrees.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="sides.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="entrees.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="sides.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="entrees.jpeg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="sides.jpeg"  className="carousels" />
                        
                    </div>
                
                
                </Carousel>
                </div>
               
            </div>
        </div>
    )
}
 

export default MainPageJumbotron