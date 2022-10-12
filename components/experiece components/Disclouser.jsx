import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



const Disclouser = () => {

    const jobs = [
        {
            title: 'Representaciones SMSOL C.A | 2021',
            cargo: 'Asesor departamento T.I, CARACAS',
            funciones: ['Contrato independiente temporal, para asesoramiento de proyecto de T.I dentro de la empresa.',
                'Administración y control de sistemas de la empresa.'
            ]

        },
        {
            title: 'Corporación Shibari, C.A | 2021 - 2022',
            cargo: 'Gerente de Sistemas Informáticos, CARACAS',
            funciones:
                [
                    'Actualización de Software y Sistemas de la empresa',
                    'Asesor de Proyectos de T.I.'
                ]

        },
        {
            title: 'Multimax Store C.A | 2022 - actualidad',
            cargo: 'Asesor de Ventas, GUANARE',
            funciones:
                [
                    'Atención y asesoramiento al cliente.',
                    'Asesoramiento específico departamento de vídeo y audio.',
                    'Auditor de precios y existencia de mercancía.'
                ]

        }

    ]

    return (
        <>
            {
                jobs.map((job, idx) => (
                    <div key={idx} className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                        <Disclosure>
                            {({ open }) => (
                                <div>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-emerald-200 px-4 py-2 text-left text-sm font-medium text-emerald-800 hover:bg-emerald-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span className='text-lg'>{job.title}</span>
                                        <ChevronDownIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-emerald-800`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        <p className='text-base font-semibold pb-2'>{job.cargo}</p>
                                        <p className='font-semibold text-slate-900'>Tareas:</p>
                                        <ul className='text-slate-900'>
                                            {
                                                job.funciones.map((funcion) => (
                                                    <li className='flex text-base text-body-color ml-4 mb-2'>
                                                        <span
                                                            className="bg-emerald-800 rounded-full mr-2 text-base flex items-center justify-center h-1 max-w-[4px] w-full mt-3">
                                                        </span>
                                                        {funcion}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                    </div>
                ))
            }



        </>
    )
}

export default Disclouser