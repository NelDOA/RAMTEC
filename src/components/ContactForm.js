import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { Icon } from '@iconify/react';

const ContactForm = () => {
    return (
        <div className="relative bg-white">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-sexto" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="bg-sexto  py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-2xl font-sen font-extrabold tracking-tight text-tercero sm:text-3xl">Escríbanos</h2>
                        <p className="mt-3 text-lg leading-6 text-tercero">
                            Si tiene alguna inquietud, recomendación o requiere soporte personalizado, por favor no dude en contactarnos por alguno de nuestros medios o escríbanos diligenciando sus datos y su mensaje en  el formulario.
                        </p>
                        <dl className="mt-8 text-base text-tercero">
                            <div>
                                <dt className="sr-only">Dirección de correo</dt>
                                <dd>
                                    <p className="text-base text-segundo" >Dirección</p>
                                    <p className="text-base text-quinto">Bogota, Colombia</p>
                                </dd>
                            </div>
                            <div className="mt-6">
                                <dt className="sr-only">Número telefónico</dt>
                                <dd className="flex">
                                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-cuarto" aria-hidden="true" />
                                    <span className="ml-3 text-tercero">311 290 3486</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <MailIcon className="flex-shrink-0 h-6 w-6 text-cuarto" aria-hidden="true" />
                                    <a href="mailto:soporte@ramtec.co?Subject=Contacto" className="ml-3" >soporte@ramtec.co</a> 
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">WhatsApp</dt>
                                <dd className="flex mt-1 ">
                                    <Icon icon="simple-icons:whatsapp" className="h-6 w-6 flex-shrink-0 text-cuarto" aria-hidden="true"> WhatsApp </Icon>
                                    <a href='https://wa.me/573112903486?text=Hola%20RAMTEC.%20Requiero%20contactarme%20con%20ustedes' className="ml-3" > 311 290 34 86</a> 
                                </dd>
                                <dd className="flex mt-1  ">
                                    <Icon icon="simple-icons:whatsapp" className="h-6 w-6 flex-shrink-0 text-cuarto" aria-hidden="true"> WhatsApp </Icon>
                                    <a href='https://wa.me/573192343480?text=Hola%20RAMTEC.%20Requiero%20contactarme%20con%20ustedes' className="ml-3" > 319 234 34 80</a>
                                </dd>
                                <dd className="flex mt-1  ">
                                    <Icon icon="simple-icons:whatsapp" className="h-6 w-6 flex-shrink-0 text-cuarto" aria-hidden="true"> WhatsApp </Icon>
                                    <a href='https://wa.me/573125237101?text=Hola%20RAMTEC.%20Requiero%20contactarme%20con%20ustedes' className="ml-3" > 312 523 71 01</a> 
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            <div className="bg-quinto py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div className="max-w-lg mx-auto lg:max-w-none">
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                    <div>
                    <label htmlFor="full-name" className="sr-only">
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="name"
                        className="block w-full shadow-sm py-3 px-4 text-tercero placeholder-primero focus:ring-primero focus:border-cuarto border-segundo rounded-md"
                        placeholder="Nombre completo"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm py-3 px-4 text-tercero placeholder-primero focus:ring-primero focus:border-cuarto border-segundo rounded-md"
                        placeholder="Email"
                    />
                    </div>
                    <div>
                    <label htmlFor="phone" className="sr-only">
                        Teléfono
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full shadow-sm py-3 px-4 text-tercero placeholder-primero focus:ring-primero focus:border-cuarto border-segundo rounded-md"
                        placeholder="Teléfono de contacto"
                    />
                    </div>
                    <div>
                    <label htmlFor="message" className="sr-only">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full shadow-sm py-3 px-4 text-tercero placeholder-primero focus:ring-primero focus:border-cuarto border-segundo rounded-md"
                        placeholder="Escríbanos su mensaje"
                        defaultValue={''}
                    />
                    </div>
                    <div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-tercero hover:bg-primero focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto"
                    >
                        Enviar
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        )
}

export default ContactForm;