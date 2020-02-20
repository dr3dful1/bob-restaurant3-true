import React from 'react';
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import Footer from './Footer'
import Sbackground from './Sbackground'
function History(){


    return(
        <div>
            <div className="mbackground"> 
                <div className="container">
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
 

export default History;