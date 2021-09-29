import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="w-full h-12 bg-gray-800 my-20"></div>
            <p className="ff text-gray-800 text-4xl text-center pt-2 mb-5">Subscribe for weekly comics</p>
            <p className="text-center font-bold text-red-600 text-xl">No Spams, just a single page comics in your inbox
                weekly. Like <span className="text-blue-600 underline">this</span> one.</p>
            <div className="w-1/3 flex mx-auto justify-between mt-8 mb-16">
                <input type="text" className="w-3/5 bg-gray-200 p-5 text-lg" placeholder="Your Email" />
                <p className="w-1/5 text-center uppercase bg-blue-500 text-white font-bold pt-6">Subscribe</p>
            </div>
            <div className="bg-gray-800">
                <div className="text-5xl text-gray-400 text-center py-5">
                    <i className="fab fa-facebook-f cursor-pointer"></i>
                    <i className="fab fa-twitter px-8 cursor-pointer"></i>
                    <i className="fab fa-instagram cursor-pointer"></i>
                </div>
                <p className="text-gray-500 ff text-center pb-10">Subham Roy, SecurityZines © 2021, All Rights Reserved.
                </p>
            </div>
        </>
    )
}

export default Footer
