import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselPage from './CarouselPage'
function MainPageJumbotron(){


    return(
         

            <div className="jumbotron ">

                <p className="titleText container">

                   Taste of Caribbean

                </p> 
                
                     

                        
                        
                        <Carousel showThumbs={false} className="bigCarousel" >
                            <div className="imageDivs" >
                                <img src="jerkshrimp.jpg" className="mainPageCarouselPics"   />
                                
                            </div>
                            <div className="imageDivs">
                                <img src="Chef_drops_onions.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div className="imageDivs">
                                <img src="oxtails.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div className="imageDivs">
                                <img src="lobster_macaroni.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div className="imageDivs">
                                <img src="coconut_chicken_curry.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div className="imageDivs">
                                <img src="beer_and_mpie.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div className="imageDivs">
                                <img src="oxtail_roti.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div className="imageDivs">
                                <img src="shrimp_roti.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                            <div className="imageDivs">
                                <img src="chef_info.jpg"  className="mainPageCarouselPics" />
                                
                            </div>
                    
                        </Carousel>
                      
                  
                     
                 
        </div>
                          
     
         
    )
}
 

export default MainPageJumbotron