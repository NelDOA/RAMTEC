import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { Icon } from '@iconify/react';

const ContactInfo = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="text-2xl font-extrabold text-tercero font-sen sm:text-3xl">Asesoría</h2>
                        <div className="mt-3">
                            <p className="text-lg text-segundo font-ubuntu">
                                Si tiene inquietudes respecto de nuestros productos, su calidad, tiempos de entrega y precios por favor contáctenos por alguno de los siguientes medios:
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-cuarto" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-tercero">
                                    <p> 311 290 34 86</p>
                                    <p className="mt-1 text-quinto">Lun-Dom 7am a 8pm </p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <MailIcon className="h-6 w-6 text-cuarto" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-primero">
                                    <a href="mailto:soporte@ramtec.co?Subject=Asesoria%20de%20producto" >soporte@ramtec.co</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 className="text-2xl font-extrabold text-tercero font-sen sm:text-3xl">Ventas</h2>
                        <div className="mt-3">
                            <p className="text-lg text-segundo font-ubuntu">
                                Si ya decidió las caracteristicas de su(s) producto(s) y quiere ordenarlo(s), por favor contactenos por alguno de los siguientes medios:
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-cuarto" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-tercero">
                                    <p> 311 290 34 86</p>
                                    <p className="mt-1 text-quinto">Lun-Dom 7am a 8pm </p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <Icon icon="simple-icons:whatsapp" className="h-6 w-6 text-cuarto" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-tercero">
                                    <a href='https://wa.me/573112903486?text=Hola%20RAMTEC.%20Estoy%20interesad@%20en%20sus%20productos'> 311 290 34 86</a>
                                    <p className="mt-1 text-quinto">24-7</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <MailIcon className="h-6 w-6 text-cuarto" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-primero">
                                    <a href="mailto:comercial@ramtec.co?Subject=Solicitud%20de%20producto" >comercial@ramtec.co</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ContactInfo;