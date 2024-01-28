import React from 'react';

function Aboutus(props) {
    return (
        <section id="aboutus" className="text-gray-600 body-font text-white relative">
            <div className="container px-5 py-10 mx-auto flex flex-col">
                <h2 className="font-medium title-font mt-4  text-white text-lg sm:text-2xl md:text-5xl">About Us</h2>
                <div className="w-20 sm:w-60 h-1 bg-yellow rounded mt-2 mb-4"></div>
                <div className="lg:w-4/5">
                    <div className="flex flex-col sm:flex-row mt-3">
                        <div className="sm:w-2/3 sm:pl-8 mr-10 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left text-lg sm:text-xl">
                            <p className="leading-relaxed text-lg mb-4">
                                মাল্টি ক্যুজিন সাত্ত্বিক নিরামিষ রেস্টুরেন্ট বিশেষত ডায়াবেটিক ও স্বাস্থ্য সচেতনদের জন্য।
                                আমাদের তৈরি খাদ্য শূন্য বা অল্প ক্যালোরি যুক্ত যা কম গ্লাইসেমিক ইনডেক্স যুক্ত</p>
                            <p className='mb-3'>যেগুলি আমাদের খাবারে দেওয়া হয়না :
                            </p>
                            <ul>
                                <li className='mb-2'>▪পেঁয়াজ ব্যতীত</li>
                                <li className='mb-2'>▪ রসুন ব্যতীত</li>
                                <li className='mb-2'>▪ চিনি ব্যতীত</li>
                                <li className='mb-2'>▪ লাল লঙ্কা গুঁড়ো ব্যতীত</li>
                                <li className='mb-2'>▪ মাশরুম ব্যতীত</li>
                                <li className='mb-2'>▪ ময়দা ব্যতীত</li>
                                <li className='mb-2'>▪ ক্যাফেইন ব্যতীত</li>
                                <li className='mb-2'>▪ রিফাইন্ড তেল ব্যতীত</li>
                                <li className='mb-2'>▪ কৃত্রিম মিষ্টি ব্যতীত</li>
                            </ul>

                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-lg sm:text-xl">
                            <p className="leading-relaxed text-lg mb-4">
                                আমরা যেগুলি রান্নায় ব্যবহার করি</p>

                            <ul>
                                <li className='mb-2'>▪প্রাকৃতিক মিষ্ট দ্রব্য(যেমন স্টিভিয়া এক্সট্রাক্ট, মঙ্ক ফ্রুট এক্সট্রাক্ট, ও যষ্টি মধু) ব্যবহার করা হয়</li>
                                <li className='mb-2'>▪ অপরিশুদ্ধ ভার্জিন তেল (সর্ষে/তিল/নারকেল/বাদাম)  ব্যবহার করা হয়</li>
                                <li className='mb-2'>▪সম্পুর্ন ফাইবার যুক্ত আটা</li>
                                <li className='mb-2'>▪ ফাইবার যুক্ত খাদ্য
                                </li>
                                <li className='mb-2'>▪ ফর্মেন্টেড খা</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;