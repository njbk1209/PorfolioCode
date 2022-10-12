import React from 'react'
import Image from 'next/image'
import nelsonPerfil from '../public/nelson.jpg'

const Aboutme = () => {
    return (
        <div className='grid grid-cols-3 gap-4 px-72 py-8 bg-gradient-to-r from-emerald-600 to-emerald-300'>

            <div className='m-auto'>
                <Image
                    src={nelsonPerfil}
                    alt="Picture of the author"
                    width={300}
                    height={350}
                    className='rounded'
                />
            </div>

            <div className='col-span-2 ml-4'>
                
                <p className='text-base pb-2 text-slate-100 indent-9'>
                    Hola, bienvenido a mi portafolio virtual. Soy ingeniero de sistemas desde hace 2 años. También, me entusiasma la programación desde hace aproximadamente 4 años. He desarrollado pequeños y medianos proyectos de programación web. Mis tecnologías favoritas son React y Django.
                </p>
                
                <p className='text-base text-slate-100 indent-9'>
                    Me considero una persona responsable, empática, de fácil adaptación al trabajo en equipo y con capacidad para resolver problemas eficientemente. También, soy una persona proactiva y creativa, con muchas ganas de aprender nuevas habilidades.
                </p>
            </div>

        </div>
    )
}

export default Aboutme