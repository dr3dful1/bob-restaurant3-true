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
                        <img src="jerkshrimp.jpg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="Chef_drops_onions.jpg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="oxtails.jpg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="lobster_macaroni.jpg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="coconut_chicken_curry.jpg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="beer_and_mpie.jpg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="oxtail_roti.jpg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="shrimp_roti.jpg"  className="carousels" />
                        
                    </div>
                    <div>
                        <img src="chef_info.jpg"  className="carousels" />
                        
                    </div>
                   
                </Carousel>
                </div>
               
            </div>
        </div>
    )
}
 

export default MainPageJumbotron