import React from 'react';
function Brokerage() {
    return (
        <div className='container border-top'>

            <div className='row p-5 '>
                <div className='col-8 p-5'>
                    <a href='' style={{ textDecoration: "none" }}><h3 className='fs-5'>Brokerage</h3></a>
                    <ul style={{textAlign:"left",lineHeight:"2.5"}} className='text-muted'>
                        <li className='mb-3'>Call & Trade and RMS auto-squareoff:
                        Additional charges of ₹50 +
                        GST per order. </li>
                        <li className='mb-3'>Digital contract notes will be sent via e-mail.
                        Physical copies of contract notes, if required, shall be charged
                        ₹20 per contract note. Courier charges apply. </li>
                        <li className='mb-3'>For NRI account
                        (non-PIS), 0.5% or ₹100 per executed order for equity (whichever
                        is lower). </li>
                        <li className='mb-3'>For NRI account (PIS), 0.5% or ₹200 per executed order
                        for equity (whichever is lower). </li>
                        <li className='mb-3'>If the account is in debit
                        balance, any order placed will be charged ₹40 per executed order
                        instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-5'>
                    <a href='' style={{ textDecoration: "none" }}><h3 className='fs-5'>List of Charges</h3></a>
                </div>
            </div>

        </div>
    );
}

export default Brokerage;