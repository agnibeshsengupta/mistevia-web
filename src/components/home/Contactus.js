import React from 'react';
import { ContactDetails } from '../../constants/Header'

function Contactus(props) {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=MISTEVIA&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ filter: "grayscale(0) contrast(1.2) opacity(0.6)" }}></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">REACH US</h2>
                    {ContactDetails.map((c, i) => (
                        <div key={i} className="mb-4">
                            <p className="text-sm mb-2 text-gray-400">{c.title}</p>
                            <p className={`text-heading ${i !== 0 ? 'text-xs' : ''} font-semibold`}>
                                {c.description}
                            </p>
                        </div>
                    ))}
                    <p className="text-base mb-2 text-gray-400 font-semibold">For any suggestions or feedback please fill this <a className='text-bluedark underline' href='#'>form</a>.</p>
                </div>


            </div>
        </section >
    );
}

export default Contactus;