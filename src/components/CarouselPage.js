import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class CarouselPage extends Component {
    render() {
        return (
           
            <Carousel showThumbs={false}>
                <div className="car1">
                    <img src="entrees.jpeg"  className="carousels" />
                     
                </div>
                <div>
                    <img src="sides.jpeg"  className="carousels" />
                     
                </div>
               
            </Carousel>

          
        );
    }
};
 
export default CarouselPage
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 