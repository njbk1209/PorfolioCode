import React from 'react'
import Image from 'next/image'
import bannertect from '../public/bannerTect.png'

const BannerTop = () => {
    return (
        <div
        className='bg-contain '
        style={{
            backgroundImage: `url(${bannertect.src})`,
          }}
        >
            <div className='grid justify-items-center d-inline py-8'
            style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)'
            }}
            >
                <h1 className='text-white text-3xl font-sans font-semibold my-4'>
                    NELSON BOLAÑO
                </h1>
                <div className='h-0.5 w-11/12 m-auto bg-gradient-to-r from-slate-500 via-emerald-500 to-slate-500'>

                </div>
                <h2 className='text-white text-2xl font-sans font-semibold tracking-tight my-4'>
                    Frontend Developer
                </h2>

            </div>
        </div>

    )
}

export default BannerTop