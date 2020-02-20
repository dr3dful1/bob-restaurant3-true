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
                
                    <div className="container">

                     
                        
                        <Carousel showThumbs={false} className="CarouselDiv" >
                            <div  >
                                <img src="jerkshrimp.jpg" className="mainPageCarouselPics"   />
                                
                            </div>
                            <div>
                                <img src="Chef_drops_onions.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div>
                                <img src="oxtails.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div>
                                <img src="lobster_macaroni.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div>
                                <img src="coconut_chicken_curry.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div>
                                <img src="beer_and_mpie.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div>
                                <img src="oxtail_roti.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div>
                                <img src="shrimp_roti.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div>
                                <img src="chef_info.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                    
                        </Carousel>
                     </div>
                  
                     
                 
        </div>
                          
    </div>     
         
    )
}
 

export default MainPageJumbotron