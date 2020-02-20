import React from 'react';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar'
import Footer from './Footer'
import Sbackground from './Sbackground';
function Landing(){

    return(
        
        <div>


            <div className="mbackground">   
    
                    <div className="container"  >
                    
                    <Navbar />
                    <Jumbotron />
                   
                    
                    
                </div>
            </div>
             <div className="footBox">

                <Footer />
             </div>

            
      
        </div>
            )
    }

    

    export default Landing;