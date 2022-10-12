import React from 'react'

const Portfolio = () => {
    return (
        <div id='portfolio' className='my-8 max-w-7xl m-auto'>
            <h1 className='text-slate-800 text-3xl font-sans text-center font-semibold pb-4'>
                PORTFOLIO
            </h1>
            <div className='h-0.5 w-11/12 m-auto bg-gradient-to-r from-white via-emerald-500 to-white'>

            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-10/12 m-auto my-4 ">
                <div className='bg-violet-500 h-64 rounded-lg shadow-lg shadow-slate-500'>01</div>
                <div className='bg-violet-500 h-64 rounded-lg shadow-lg shadow-slate-500'>02</div>
                <div className='bg-violet-500 h-64 rounded-lg shadow-lg shadow-slate-500'>03</div>
                <div className='bg-violet-500 h-64 rounded-lg shadow-lg shadow-slate-500'>04</div>
                <div className='bg-violet-500 h-64 rounded-lg shadow-lg shadow-slate-500'>05</div>
                <div className='bg-violet-500 h-64 rounded-lg shadow-lg shadow-slate-500'>06</div>
            </div>
        </div>
    )
}

export default Portfolio