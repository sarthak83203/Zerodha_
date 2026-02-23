import React from 'react';
function Hero() {
    return ( 
           <section className='container-fluid' id='supporthero'>
            <div className='p-3' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a style={{textDecoration:"none"}} href=''>Track Tickets</a>  
            </div>
            <div className='row p-5 mx-5'>
                 <div className='col-6'>
                    <h1 className='fs-3'>Search for an answer or browse help topics<br></br>to create a ticket</h1>
                    <br></br>
                    <br></br>
                    <input placeholder='Eg. how do i activate F&O'/><br></br>
                    <br></br>
                    <br></br>
                    <a style={{textDecoration:"none"}} href=''>Track account opening</a>
                    <a style={{textDecoration:"none"}} href=''>Track segment activation</a>
                    <br></br>
                    <a style={{textDecoration:"none"}} href=''>Intraday margins</a>
                    <a style={{textDecoration:"none"}} href=''>Kite user manual</a>
                 </div>
                  <div className='col-6 mt-5 mb-5'>
                    <h1>Featured</h1>
                    <ol>
                        <li> <a style={{textDecoration:"none"}} href=''>Current Takeovers and Delistings-January 2024</a></li>
                       <li><a style={{textDecoration:"none"}} href=''>Latest intraday leverages-MI & CO</a></li>
                    </ol>
                     
                 </div>
                           
            </div>
        </section>
     );
}

export default Hero;