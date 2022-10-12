import React from 'react'
import Disclouser from './experiece components/Disclouser'
import Image from 'next/image'
import trabajo from '../public/trabajos.webp'

const Experience = () => {
    return (
        <div id='experience' className='my-8 max-w-7xl m-auto'>
            <h1 className='text-slate-800 text-3xl font-sans text-center font-semibold pb-4'>
                EXPERIENCE
            </h1>
            <div className='h-0.5 bg-gradient-to-r from-white via-emerald-500 to-white'>

            </div>
            <div className='md:grid md:grid-cols-7 Space evenly content-center items-center pt-4'>

                <div className="col-span-4">

                    <Disclouser />


                </div>

                <div className='col-span-3'>
                    <Image
                        src={trabajo}
                        alt="s"
                        width={450}
                        height={450}
                    />
                </div>




            </div>



        </div >
    )
}

export default Experience