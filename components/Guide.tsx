import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className=' max-container padding-container w-full pb-24'>
        <Image
          src='/camp.svg'
          alt='camp'
          width={50}
          height={50}
        />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          Estamos aqui por você
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[410px] capitalize'>Iremos facilitar sua jornada.</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Inicie sua jornada de viagem com confiança! 
            Nossos roteiros detalhados, dicas para iniciantes e conselhos passo a passo tornam 
            o planejamento fácil, seja você um viajante de primeira viagem ou um explorador experiente. 
            Desde a escolha do destino ideal até a descoberta de lugares secretos, estamos aqui 
            para guiar você em cada etapa do caminho.
          </p>
        </div>
      </div>

      <div className='flexCenter max-container padding-container relative w-full'>
        <Image
          src="/boat.png"
          alt='boat'
          height={580}
          width={1440}
          className='w-full object-cover object-center xl:rounded-5xl'
        />

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image 
            src='/meter.svg'
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col lg:min-w-[180px]'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full gap-6'>
                <p className='regular-16 text-gray-20'>Destino</p>
                <p className='bold-16 text-green-50'>1h 48 min</p>
              </div>
              <p className='bold-20 mt-2'>Ubatuba</p>
            </div>

            <div className='flex w-full flex-col'>              
              <p className='regular-16 text-gray-20'>Início</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>São Paulo</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide