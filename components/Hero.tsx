import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map' />

      {/* LEFT SIDE */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src='/camp.svg'
          alt='camp'
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-52 lg:bold-88'>Desbrave Novos Destinos!</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Explore o mundo lá fora com roteiros, dicas e os melhores destinos para cada aventureiro. 
          Seja você um viajante experiente ou de primeira viagem, 
          temos tudo o que precisa para planejar sua próxima aventura.
        </p>

        <div className='my-11 flex flex-warp gap-5'>
          <div className='flex item-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt='star'
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>
            198k
            <span className='regular-16 lg:regular-20 ml-1'>Avaliações</span>
          </p>
        </div>

        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button
            type='button'
            title="Começe agora"
            variant='btn_green'
          />

          <Button
            type='button'
            title="Como Trabalhamos"
            icon='/play.svg'
            variant='btn_white_text'
          />
        </div>
      </div>

      <div className='relative flex flex-1 items-start '>
        <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>

          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>Localização</p>
              <Image
                src='/close.svg'
                alt='close'
                width={24}
                height={24}
              />
            </div>
            <p className='bold-20 text-white'>Aguas Calientes</p>
          </div>


          <div className='flexBetween'>
            <div className='flex flex-col'>
              <p className='regular-16 text-gray-20'>Distância</p>
              <p className='bold-20 text-white'>173.28 km</p>
            </div>

            <div className='flex flex-col'>
              <p className='regular-16 text-gray-20'>Elevação</p>
              <p className='bold-20 text-white'>2.083 km</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero