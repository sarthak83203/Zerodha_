import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDecription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL}/>
                </div>
                
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDecription}</p>
                    <div >
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt=''/></a>
                       <a href={appStore} style={{marginLeft:"50px"}}><img src='media/images/appstoreBadge.svg' alt=''/></a>
                    

                    </div>
                    
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;