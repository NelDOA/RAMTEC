import React from 'react';

const LoadingPage = () => {
  return (
    <div className='container mx-auto animate-pulse' >
        <h3 className='text-center font-sen text-xl text-primero mx-auto my-10'> Cargando ... </h3>
        <img className=" h-[80vh] w-auto mx-auto " src="/logo1.svg" alt=""/>
    </div>
  )
}

export default LoadingPage;