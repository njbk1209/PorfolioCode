import React from 'react';
import emailjs from '@emailjs/browser';
import { Formik, setSubmitting } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Swal from 'sweetalert2'


const Contacts = () => {

    function SendEmail(object) {
        emailjs.send('service_x94cgq5', 'template_ypu61r9', object, 'user_HPPU8LjBR50sGGYGwcMHb')
            .then((result) => {
                Swal.fire({
                    title: 'Aprobado',
                    text: 'Se ha enviado el correo satisfactoriamente',
                    icon: 'success',
                    confirmButtonText: 'Cerrar'
                  })
                console.log(result)
                setLoader(false)
            }, (error) => {
                Swal.fire({
                    title: 'Fallo',
                    text: 'No se ha enviado el correo :(',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                })
                console.log(error)
                setLoader(false)
            });
    }

    const [loader, setLoader] = useState(false);

    return (
        <div id='contacts' className='bg-white mt-8 max-w-7xl m-auto'>
            <div className="md:grid md:grid-cols-3 font-sans">
                <div className='bg-emerald-500 p-2 text-slate-50 px-6'>
                    <h1 className='text-xl pt-6 pb-2'>
                        Contacts information
                    </h1>
                    <div className='h-0.5 bg-white mb-4'>

                    </div>
                    <p className='pb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias ea doloribus, perspiciatis ut rerum
                    </p>
                    <p className='pb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>

                        +58-424-530-5968
                    </p>
                    <p className='pb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        njbk1996@gmail.com
                    </p>
                </div>
                <div className='col-span-2 py-2 px-6 bg-emerald-400 text-slate-50'>
                    <h1 className='text-xl pt-6 pb-2'>
                        Send me a message
                    </h1>

                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <Formik
                            initialValues={{ from_name: '', user_email: '', message: '' }}
                            validationSchema={Yup.object({
                                from_name: Yup.string()
                                    .max(50, 'Must be 50 characters or less')
                                    .required('Required'),
                                user_email: Yup.string().email('Invalid email address').required('Required'),
                                message: Yup.string()
                                    .max(500, 'Must be 500 characters or less')
                                    .required('Required'),
                            })}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setLoader(true)
                                setTimeout(() => {
                                    SendEmail(values);
                                    setSubmitting(false);
                                    resetForm();

                                }, 100);
                            }}
                        >
                            {formik => (
                                <form onSubmit={formik.handleSubmit}>
                                    <div class="grid grid-cols-2 gap-x-3 gap-y-1 md:w-9/12">
                                        <div>
                                            <label className='text-base font-medium block'>Full name</label>
                                            <input className="rounded w-full h-9 text-slate-800" type="text" name="from_name"
                                                id="from_name"
                                                {...formik.getFieldProps('from_name')}
                                            />
                                            {formik.touched.from_name && formik.errors.from_name ? (
                                                <div className='text-red-600 font-medium'>*{formik.errors.from_name}*</div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label className='text-base font-medium block'>Email</label>
                                            <input className="rounded w-full h-9 text-slate-800" type="email" name="user_email"
                                                id="user_email"
                                                {...formik.getFieldProps('user_email')}
                                            />
                                            {formik.touched.user_email && formik.errors.user_email ? (
                                                <div className='text-red-600 font-medium'>*{formik.errors.user_email}*</div>
                                            ) : null}
                                        </div>
                                        <div className='col-span-2'>
                                            <label className='text-base font-medium block'>Message</label>
                                            <textarea className="rounded w-full h-32 text-slate-800" name="message"
                                                id="message"
                                                {...formik.getFieldProps('message')}
                                            />
                                            {formik.touched.message && formik.errors.message ? (
                                                <div className='text-red-600 font-medium'>*{formik.errors.message}*</div>
                                            ) : null}
                                        </div>
                                        <div className='col-span-2 flex justify-center pb-4'>
                                            {loader ? <button disabled type="submit" className="py-2 px-5 lg:px-4 xl:px-8 inline-flex items-center justify-center text-center text-white text-base bg-emerald-700 hover:bg-opacity-90 font-normal rounded-md" >
                                                <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                </svg>
                                                Enviando...
                                            </button> : <button type="submit" className="py-2 px-5 lg:px-4 xl:px-8 inline-flex items-center justify-center text-center text-white text-base bg-emerald-700 hover:bg-opacity-90 font-normal rounded-md" >
                                                Enviar
                                            </button>}
                                        
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacts