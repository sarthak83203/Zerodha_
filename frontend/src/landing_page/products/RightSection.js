import React from 'react';
function RightSection({
    imageURL,
    productName,
    productDecription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}
) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDecription}</p>
                    <div >
                        <a href={learnMore}>Learn More</a>
                    </div>
       
                </div>
                <div className='col-6'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;