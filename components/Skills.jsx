import React from 'react'
import html5 from '../public/html-5.png'
import css3 from '../public/css-3.png'
import js from '../public/js.png'
import react from '../public/react.png'
import tailwind from '../public/tailwind.png'
import next from '../public/next.png'
import bootstrap from '../public/bootstrap.svg'
import git from '../public/git.png'
import github from '../public/github.png'
import python from '../public/python.png'
import redux from '../public/redux.png'
import drf from '../public/drf.png'
import Image from 'next/image'

const skiles = [
    {
        logo: html5,
        name: 'HTML'
    },
    {
        logo: css3,
        name: 'CSS'
    },
    {
        logo: js,
        name: 'JAVASCRIPT'
    },
    {
        logo: react,
        name: 'REACT'
    },
    {
        logo: redux,
        name: 'REDUX'
    },
    {
        logo: tailwind,
        name: 'TAILWIND'
    },
    {
        logo: next,
        name: 'NEXT JS'
    },
    {
        logo: bootstrap,
        name: 'BOOTSTRAP'
    },
    {
        logo: git,
        name: 'GIT'
    },
    {
        logo: github,
        name: 'GITHUB'
    },
    {
        logo: python,
        name: 'PYTHON'
    },
    {
        logo: drf,
        name: 'DJANGO REST FRAMEWORK'
    },
]

const Skills = () => {
    return (
        <div id='skills' className='bg-slate-500'>
            <div className='max-w-7xl m-auto pb-4'>
                <h1 className='text-white text-3xl font-sans text-center font-semibold py-4'>
                    SKILLSET
                </h1>
                <div className='h-0.5 w-11/12 m-auto bg-gradient-to-r from-slate-500 via-emerald-500 to-slate-500'>

                </div>
                <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 justify-items-stretch gap-16 w-10/12 m-auto py-8">

                    {
                        skiles.map((skil, idx) => (
                            <div key={idx} className='transition delay-75 hover:scale-110 hover:cursor-pointer'>
                                <Image
                                    src={skil.logo}
                                    alt="s"
                                    className=''
                                />
                                <h2 className='text-xl text-white text-center'>
                                    {skil.name}
                                </h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Skills