import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import pagination styles
import { Pagination } from 'swiper/modules'; // Import pagination module
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons library
import { Avatar } from 'flowbite-react'; // Import Avatar component from flowbite-react library
import profile from "../assets/profile.jpg"; // Import profile image
import ReviewCard from '../components/ReviewCard'; // Import ReviewCard component

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            {/* Swiper component for reviews */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {/* First Swiper slide */}
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        {/* Star rating */}
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* Review text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus libero eaque illo voluptate ducimus commodi, eos, quam repellendus, officiis esse cum alias nemo blanditiis dolore quas officia molestiae accusantium!</p>
                            
                            {/* Avatar of the reviewer */}
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            {/* Reviewer name and designation */}
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-sm'> CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Remaining Swiper slides */}
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <ReviewCard />
                </SwiperSlide>
                {/* Empty slide */}
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    {/* This slide is empty */}
                </SwiperSlide>
            </Swiper>

            {/* Empty div for spacing */}
            <div className='h-20'></div>
        </div>
    );
}

export default Review;
