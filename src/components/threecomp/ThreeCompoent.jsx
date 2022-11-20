import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri"
import { RiSecurePaymentLine } from "react-icons/ri"

const ThreeCompoent = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center p-4 text-center">
                    <div className="col-md-4">
                        <h1 className='three__icon'><FaShippingFast /></h1>
                        <h5>Free Shipping</h5>
                        <p className='text-secondary'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h1 className='three__icon'><RiCustomerService2Fill /></h1>
                        <h5>Support Customer</h5>
                        <p className='text-secondary'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h1 className='three__icon'><RiSecurePaymentLine /></h1>
                        <h5>Secure Payments</h5>
                        <p className='text-secondary'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreeCompoent;