import React from 'react'

const Home = () => {
    return (
        <>
            <div className="ff text-center bg-gray-800">
                <h1 className="text-6xl underline text-red-600 font-semibold py-8">Security Zines</h1>
                <p className="text-green-600 text-2xl pb-8">Simple explanations for security topics by <span
                        className="text-blue-600 underline">Subham</span></p>
            </div>
            <div
                className="text-gray-800 ff text-2xl mx-72 my-16 border-dashed border-gray-800 border-4 p-5 rounded-3xl">
                <span className="font-bold underline">SecurityZines</span> are new way of learning security concepts,
                check the collection of Zines down
                below. You can get them all in a bundle or individually. But why should you read it ? Because, its
                proven that graphics has more persistent memory than text.
            </div>
            <div className="flex justify-evenly">
                <div className="w-1/3">
                    <p className="ff text-gray-800 text-4xl text-center py-5">Upcoming ...</p>
                    <img src="https://securityzines.com/assets/img/CatCreatesBurpExtenderPlugins.png" alt=""
                        className="w-2/3 shadow-2xl mx-auto" />
                </div>
                <div className="w-1/3">
                    <p className="ff text-gray-800 text-4xl text-center py-5">New Launch !!!</p>
                    <div className="w-full flex justify-evenly mt-10">
                        <img src="https://securityzines.com/assets/img/zines/docker.jpg" alt=""
                            className="w-1/3 shadow-2xl" />
                        <img src="https://securityzines.com/assets/img/flyers/downloads/idor.jpg" alt=""
                            className="w-1/3 shadow-2xl" />
                    </div>
                </div>
            </div>
            <p className="ff text-gray-800 text-6xl text-center pt-16 mb-16">Zines</p>
            <div className="mx-auto w-4/5 grid grid-cols-4 gap-10">
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    <p className="ff text-blue-700 text-3xl text-center py-5 underline">Security Zines Bundle</p>
                </div>
            </div>
            <p className="ff text-gray-800 text-6xl text-center pt-16 mb-16">Flyers</p>
            <div className="mx-auto w-4/5 grid grid-cols-4 gap-10">
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
            </div>
            <div className="mx-auto w-4/5 bg-gray-800 rounded-3xl px-10 pb-10 mt-16 mb-10">
                <p className="ff text-white text-6xl text-center pt-8 mb-8">Some of them, you can print too.</p>
                <div className="grid grid-cols-4 gap-10">
                    <div className="cursor-pointer">
                        <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                    </div>
                </div>
            </div>
            <p className="ff text-gray-800 text-6xl text-center pt-16 mb-16">Presentation</p>
            <div className="mx-auto w-4/5 grid grid-cols-4 gap-10">
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <img src="https://securityzines.com/assets/img/zines/bundle.png" alt="" />
                </div>
            </div>
            <div className="w-full h-12 bg-gray-800 my-20"></div>
            <p className="ff text-gray-800 text-4xl text-center pt-2 mb-5">Subscribe for weekly comics</p>
            <p className="text-center font-bold text-red-600 text-xl">No Spams, just a single page comics in your inbox weekly. Like <span className="text-blue-600 underline">this</span> one.</p>
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
                <p className="text-gray-500 ff text-center pb-10">Subham Roy, SecurityZines © 2021, All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Home
