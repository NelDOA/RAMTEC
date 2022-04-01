import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import {  Switch } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const userDefault ={    displayName: '',
                        email: '',
                        photoURL: '',
                        phoneNumber:'',
};

const SettingsUserPage = () => {

    const [availableToHire, setAvailableToHire] = useState(true);
    const [privateAccount, setPrivateAccount] = useState(false);
    const [allowCommenting, setAllowCommenting] = useState(true);
    const [allowMentions, setAllowMentions] = useState(true);
    

    const [user, setUser] = useState(userDefault);


        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser( user );
        } else {
            console.log( 'No se encuentra un usuario con sesion abierta' );
        }
        });

    

    const {displayName, email, photoURL, phoneNumber} = user;

  return (
    <form className="divide-y divide-sexto lg:col-span-9" action="#" method="POST">
                {/* Profile section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg leading-6 font-medium text-segundo">Perfil</h2>
                    <p className="mt-1 text-sm text-quinto">
                      Información personal
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="flex-grow p-4 space-y-1">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-segundo">
                            Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            defaultValue={displayName}
                            className="mt-1 block w-full border border-quinto/40 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-segundo">
                            email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            defaultValue={email}
                            className="mt-1 block w-full border border-quinto/40 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-segundo">
                            Empresa / compañía
                        </label>
                        <input
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="organization"
                            className="mt-1 block w-full border border-quinto/40 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-segundo">
                            Numero de contacto
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="phone"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            defaultValue={phoneNumber}
                            className="mt-1 block w-full border border-quinto/40 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                      <p className="text-sm font-medium text-cuarto" aria-hidden="true">
                        Imagen
                      </p>
                      <div className="mt-1 lg:hidden">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                            aria-hidden="true"
                          >
                            <img className="rounded-full h-full w-full" src={photoURL} alt="" />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                              <label
                                htmlFor="mobile-user-photo"
                                className="relative text-sm leading-4 font-medium text-tercero pointer-events-none"
                              >
                                <span>Cambiar</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="mobile-user-photo"
                                name="user-photo"
                                type="file"
                                className="absolute w-full h-full opacity-0 cursor-pointer border-quinto rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden relative rounded-full overflow-hidden lg:block">
                        <img className="relative rounded-full w-40 h-40" src={photoURL} alt="" />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 w-full h-full bg-tercero bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                        >
                          <span>cambiar</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-quinto rounded-md"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Privacy section */}
                <div className="pt-6 divide-y divide-sexto">
                  <div className="px-4 sm:px-6">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-segundo">Privacidad</h2>
                      <p className="mt-1 text-sm text-quinto">
                        Active o desative las opciones de privacidad del uso de la información para su perfil
                      </p>
                    </div>
                    <ul role="list" className="m-4 divide-y divide-quinto">
                      <Switch.Group as="li" className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="text-sm font-medium text-segundo" passive>
                            Medios de contacto
                          </Switch.Label>
                          <Switch.Description className="text-sm text-tercero">
                            Permitir que RAMTEC me contacte a cualquiera de los medios registrados
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={availableToHire}
                          onChange={setAvailableToHire}
                          className={classNames(
                            availableToHire ? 'bg-primero' : 'bg-sexto',
                            'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              availableToHire ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group as="li" className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="text-sm font-medium text-segundo" passive>
                            otro
                          </Switch.Label>
                          <Switch.Description className="text-sm text-tercero">
                            Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra.
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={privateAccount}
                          onChange={setPrivateAccount}
                          className={classNames(
                            privateAccount ? 'bg-primero' : 'bg-sexto',
                            'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              privateAccount ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group as="li" className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="text-sm font-medium text-segundo" passive>
                            Allow commenting
                          </Switch.Label>
                          <Switch.Description className="text-sm text-tercero">
                            Integer amet, nunc hendrerit adipiscing nam. Elementum ame
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={allowCommenting}
                          onChange={setAllowCommenting}
                          className={classNames(
                            allowCommenting ? 'bg-primero' : 'bg-sexto',
                            'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              allowCommenting ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group as="li" className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="text-sm font-medium text-segundo" passive>
                            Allow mentions
                          </Switch.Label>
                          <Switch.Description className="text-sm text-tercero">
                            Adipiscing est venenatis enim molestie commodo eu gravid
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={allowMentions}
                          onChange={setAllowMentions}
                          className={classNames(
                            allowMentions ? 'bg-primero' : 'bg-sexto',
                            'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              allowMentions ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                    </ul>
                  </div>
                  <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                    <button
                      type="button"
                      className="bg-tercero rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-sexto hover:bg-primero focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="ml-5 bg-segundo rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-primero focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
  )
}

export default SettingsUserPage;