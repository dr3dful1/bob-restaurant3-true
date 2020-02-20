import React from 'react';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar'
import Footer from './Footer'
import Sbackground from './Sbackground';
import MainPageJumbotron from './MainPageJumbotron'


function Landing(){

    return(
        
        <div>


            <div className="mbackground">   
    
                    <div className="container"  >
                    
                    <Navbar />
                    <MainPageJumbotron />
                   
                    
                    
                </div>
            </div>
             <div className="footBox">

                <Footer />
             </div>

            
      
        </div>
            )
    }

    

    export default Landing;