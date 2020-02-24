import React from 'react';
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import Footer from './Footer'
import Sbackground from './Sbackground'
import HistoryTextDetails from './HistoryTextDetails'
function History(){


    return(
        <div>
            <div className="mbackground"> 
                <div className="container">
                    <Navbar />
                    <HistoryTextDetails />
                     
                </div>
            </div>
                <div className="footBox">

                    <Footer />
                </div>
                

        </div>
    )
}
 

export default History;