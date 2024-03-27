import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom';


const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justfy-between items-center gap-12'>
            <div className='md:w-1/2'>
                <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
            </div>

            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug' >Find your  <span className='text-orange-500'> Favorite Book Here!</span></h2>
                <p className='mb'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse animi, minima quos, illum labore at nihil optio quia numquam aut odit commodi? Error quidem doloremque sequi assumenda dolor neque!</p>
                {/* Business stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+
                        <p className='text-base'>Book Listing</p>
                    </h3>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+
                        <p className='text-base'>Registered Users</p>
                    </h3>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+
                        <p className='text-base'>PDF Downloads</p>
                    </h3>
                </div>
             </div>
             <Link to="/shop" className='mt-12 block'><button className='bg-orange-500 text-white font-semibold px-5 py-2 rounded hover:bg-cyan-500 transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook