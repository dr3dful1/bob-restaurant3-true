import React from 'react';
import Navbar from './Navbar'
import Jumbotron2 from './Jumbotron2';
import Footer from './Footer'
import {Link} from 'react-router-dom'
import Sbackground from './Sbackground';

function Menu(){

    return(
        
        <div >   

        
            <div className="mbackground"> 
                <div className="container">
                    <Navbar />
                    <Jumbotron2 />
                     

                </div>
            </div>
            <div className="footBox">

                <Footer />
            </div>
        </div>
        )
    }
    

    export default Menu;