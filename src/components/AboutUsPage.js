import React from 'react';
import { EyeIcon, FlagIcon, HeartIcon, NewspaperIcon, PaperAirplaneIcon } from '@heroicons/react/outline';

const aboutInfo = [
    {
      name: 'Nuestra misión',
      href: 'contactUs',
      description:
        'Ofrecer a los usuarios la mejor alternativa de fabricación nacional con productos de gran calidad, con diseños originales y a su elección, a cambio de un precio justo y asequible. Aportaremos enormemente en la formalización laboral para los trabajadores del gremio de la carpintería.',
      icon: FlagIcon,
    },
    {
      name: 'Nuestra Visión',
      href: 'contactUs',
      description:
        'Marcaremos tendencia con nuestros diseños, usaremos materiales reciclables. Ofreceremos las mejores herramientas tecnológicas del sector para que los usuarios puedan elegir sus productos de manera rápida, cómoda y entretenida.',
      icon: EyeIcon,
    },
    {
      name: 'Nuestros valores',
      href: 'contactUs',
      description:
        'Calidad · Innovación · Responsabilidad · Sostenibilidad ambiental',
      icon: HeartIcon,
    },
];

const people = [
    {
      name: 'Raul Ortiz',
      role: 'Co-Founder / CEO',
      imageSrc:'',
    },
]

const AboutUsPage = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="relative pb-32 bg-tercero">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="/assets/images/aboutUsHeader.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-tercero mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold font-ubuntu tracking-tight text-cuarto md:text-5xl lg:text-6xl">Quiénes somos</h1>
                    <section className="mt-6 max-w-3xl text-justify mx-auto text-xl font-semibold text-white">
                        <p className='mt-1'>Somos una empresa que surge de una idea propia del fundador, desarrollada y soportada por su núcleo familiar y que se proyecta para hacerla crecer de manera ordenada, sistemática y sostenible. Nos dedicamos a fabricar puertas, ventanas y muebles en general, con diseños originales y materiales duraderos.</p>
                        <p className='mt-1'>Sabemos que muchas veces las puertas y ventanas en madera son elegantes y vistosas, sin embargo, son frágiles y poco adecuadas para ambientes húmedos y cálidos. Nuestro objetivo es resolver esta necesidad, entregando productos con las virtudes de la madera haciendo uso materiales más resistentes, duraderos y adaptables a muchas condiciones ambientales. </p>
                    {/* estas son las personas que estan detras del proyecto, mostrar foto agradable de cada uno. mpieza escribiendo un texto que te describa. Debe ser persuasivo y atractivo, dinámico y creativo. El clásico Nuestra compañía empezó en 1957… te describe, pero quizá aburra al lector. Ten en cuenta que este será el primer párrafo que lean sobre ti: dedícale tiempo e intenta mejorarlo siempre. Empieza escribiendo un texto que te describa. Debe ser persuasivo y atractivo, dinámico y creativo. El clásico Nuestra compañía empezó en 1957… te describe, pero quizá aburra al lector. Ten en cuenta que este será el primer párrafo que lean sobre ti: dedícale tiempo e intenta mejorarlo siempre. Explícale a qué te dedicas y qué puedes hacer para ayudarle. En esta parte es interesante hacer partícipe de tu historia al usuario con frases como «y si estás buscando que…», «me gustaría ayudarte a que mejores en…». Debe quedar muy claro a qué te dedicas y qué van a ganar si te eligen a ti. */}
                    </section>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contáctenos
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {aboutInfo.map((section) => (
                    <div key={section.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                        <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                            <div className="absolute top-0 p-5 inline-block bg-primero rounded-xl shadow-lg transform -translate-y-1/2">
                                <section.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-ubuntu font-semibold text-tercero">{section.name}</h3>
                            <p className="mt-4 text-base text-justify font-sen font-medium text-segundo">{section.description}</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                            <a href={section.href} className="text-base font-medium text-primero hover:text-cuarto">
                            Contáctenos<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
            
            {/* THE TEAM */}
            <div className="bg-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                        <div className="space-y-5 sm:space-y-4">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-tercero ">Equipo</h2>
                            <p className="text-xl text-segundo">
                                Descripcion del equipo
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                                {people.map(( person ) => (
                                    <li key={person.name}>
                                        <div className="flex items-center space-x-4 lg:space-x-6">
                                            <img className="w-20 h-20 rounded-full lg:w-28 lg:h-28" src={person.imageSrc} alt="" />
                                            <div className="font-medium text-lg leading-6 space-y-1">
                                                <h3>{person.name}</h3>
                                                <p className="text-primero">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage;