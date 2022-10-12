import { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Portfolio', href: 'portfolio', current: true },
  { name: 'Skills', href: 'skills', current: false },
  { name: 'Experiences', href: 'experience', current: false },
  { name: 'Contacts', href: 'contacts', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AppBar = () => {

  const [isShowing, setIsShowing] = useState(false)
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gradient-to-b from-slate-800 to-slate-600 shadow-lg shadow-slate-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className='hover:cursor-pointer text-white hover:text-emerald-500 px-3 py-2 rounded text-sm font-medium'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <Link
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white hover:cursor-pointer hover:scale-125 transition delay-50 hover:text-emerald-500">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
          <Transition show={isShowing}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="md:hidden py-2">
              <div className="w-11/12 m-auto bg-emerald-900 border-2 border-white rounded">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className='block p-2 rounded-md text-white hover:text-emerald-500 text-sm'
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>

                ))}
              </div>
            </Disclosure.Panel>
          </Transition>

        </>
      )}
    </Disclosure>
  )
}

export default AppBar