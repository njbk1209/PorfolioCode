import React from 'react'
import Image from 'next/image'
import porfolioCode from '../public/portfolioCode.png'


const projects = [
    {
        name: 'Porfolio Code',
        img: porfolioCode,
        src: 'https://github.com/njbk1209/PorfolioCode'
    }
]

const Portfolio = () => {
    return (
        <div id='portfolio' className='my-8 max-w-7xl m-auto'>
            <h1 className='text-slate-800 text-3xl font-sans text-center font-semibold pb-4'>
                PORTFOLIO
            </h1>
            <div className='h-0.5 w-11/12 m-auto bg-gradient-to-r from-white via-emerald-500 to-white'>

            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-10/12 m-auto my-4 ">
                {
                    projects.map((project) => (
                        <div key={project.name} className='h-60 rounded-lg shadow-lg shadow-slate-500 hover:cursor-pointer hover:scale-105 transition delay-50'>
                            <a href={project.src}>
                                <Image
                                    src={project.img}
                                    alt="s"
                                    className='block rounded-lg '
                                />
                            </a>
                            <h2 className='text-emerald-500 text-center py-2 font-medium'>{project.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio