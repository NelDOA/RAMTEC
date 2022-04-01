import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon} from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'

const orders = [
    {
      number: 'WU88191111',
      href: '#',
      invoiceHref: '#',
      createdDate: 'Jul 6, 2021',
      createdDatetime: '2021-07-06',
      deliveredDate: 'July 12, 2021',
      deliveredDatetime: '2021-07-12',
      total: '$160.00',
      products: [
        {
          id: 1,
          name: 'Micro Backpack',
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
          imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
        },
        // More products...
      ],
    },
    // More orders...
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const OrdersPage = () => {
    return (
        <div className="bg-primero/5">
            <header className="relative bg-white shadow-md">
                <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                    <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
                        <h1 className="text-2xl font-extrabold tracking-tight text-tercero sm:text-3xl">Historial de órdenes</h1>
                        <p className="mt-2 text-base text-quinto">
                            Verifique el estado de sus órdenes recientes.
                        </p>
                    </div>
                </div>
            </header>

            <main className="py-24">
                <section aria-labelledby="recent-heading" className="mt-16">
                    <h2 id="recent-heading" className="sr-only">
                        Órdenes recientes
                    </h2>
                    <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                        <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                        {   
                            orders.map((order) => (
                            <div
                                key={order.number}
                                className="bg-white border-t border-b border-quinto/10 shadow-md sm:rounded-lg sm:border"
                            >
                                <h3 className="sr-only">
                                    Orden creada el <time dateTime={order.createdDatetime}>{order.createdDate}</time>
                                </h3>

                                <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                                    <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                                        <div>
                                            <dt className="font-medium text-primero">Numero de orden</dt>
                                            <dd className="mt-1 text-quinto">{order.number}</dd>
                                        </div>
                                        <div className="hidden sm:block">
                                            <dt className="font-medium text-primero">Fecha</dt>
                                            <dd className="mt-1 text-quinto">
                                            <time dateTime={order.createdDatetime}>{order.createdDate}</time>
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="font-medium text-primero">Precio total</dt>
                                            <dd className="mt-1 font-medium text-quinto">{order.total}</dd>
                                        </div>
                                    </dl>

                                    <Menu as="div" className="relative flex justify-end lg:hidden">
                                        <div className="flex items-center">
                                            <Menu.Button className="-m-2 p-2 flex items-center text-quinto hover:text-segundo">
                                            <span className="sr-only">Opciones de orden {order.number}</span>
                                            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-segundo ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                    {
                                                        ({ active }) => (
                                                            <a
                                                            href={order.href}
                                                            className={classNames(
                                                                active ? 'bg-quinto text-segundo' : 'text-tercero',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                            >
                                                                Ver orden
                                                            </a>
                                                        )
                                                    }
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                    {
                                                        ({ active }) => (
                                                            <a
                                                            href={order.invoiceHref}
                                                            className={classNames(
                                                                active ? 'bg-quinto text-segundo' : 'text-tercero',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                            >
                                                                Factura
                                                            </a>
                                                        )
                                                    }
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                                        <a
                                            href={order.href}
                                            className="flex items-center justify-center bg-white py-2 px-2.5 border border-quinto/30 rounded-md shadow-sm text-sm font-medium text-segundo hover:bg-quinto hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto transition-colors"
                                        >
                                            <span>Ver orden</span>
                                            <span className="sr-only">{order.number}</span>
                                        </a>
                                        <a
                                            href={order.invoiceHref}
                                            className="flex items-center justify-center bg-white py-2 px-2.5 border border-quinto/30 rounded-md shadow-sm text-sm font-medium text-segundo hover:bg-quinto hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto transition-colors"
                                        >
                                            <span>Ver factura</span>
                                            <span className="sr-only">for order {order.number}</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Products */}
                                <h4 className="sr-only">Items</h4>
                                <ul role="list" className="divide-y divide-gray-200">
                                {
                                    order.products.map((product) => (
                                        <li key={product.id} className="p-4 sm:p-6">
                                            <div className="flex items-center sm:items-start">
                                                <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 ml-6 text-sm">
                                                    <div className="font-semibold text-segundo sm:flex sm:justify-between">
                                                        <h5>{product.name}</h5>
                                                        <p className="mt-2 sm:mt-0">{product.price}</p>
                                                    </div>
                                                    <p className="hidden text-segundo sm:block sm:mt-2">{product.description}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6 sm:flex sm:justify-between">
                                                <div className="flex items-center">
                                                    <CheckCircleIcon className="w-5 h-5 text-cuarto" aria-hidden="true" />
                                                    <p className="ml-2 text-sm font-medium text-quinto">
                                                    Enviada el <time dateTime={order.deliveredDatetime}>{order.deliveredDate}</time>
                                                    </p>
                                                </div>

                                                <div className="mt-6 border-t border-quinto pt-4 flex items-center space-x-4 divide-x divide-quinto text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                                                    <div className="flex-1 flex justify-center">
                                                        <a
                                                            href={product.href}
                                                            className="text-primero whitespace-nowrap hover:text-cuarto"
                                                        >
                                                            Ver producto
                                                        </a>
                                                    </div>
                                                    <div className="flex-1 pl-4 flex justify-center">
                                                        <a href="#" className="text-primero whitespace-nowrap hover:text-cuarto">
                                                            Comprar de nuevo
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
            </main>

        </div>
  )
}

export default OrdersPage;