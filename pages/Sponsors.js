import Image from 'next/image'
import { BiUpArrowAlt } from 'react-icons/bi'

export default function Sponsors() {
  return (
    <main className='pt-6 h-screen bg-neutral-500'>

      {/* Sponsor Card */}
      <div className='border-2 bg-white px-4 py-6 max-w-[486px] border-black w-[290px] sm:w-[480px] mx-auto h-auto rounded-lg shadow-2xl shadow-neutral-600 flex flex-col sm:flex-row'>
        {/* Sponsor Image */}
        <div className='my-auto mx-auto'>
          <Image
            src={'/images/Slendo.png'}
            width={190}
            height={180}
            className='border-2 border-black rounded-lg overflow-hidden'
            alt='sponsor'
          />
        </div>

        {/* Sponsor social links images and info*/}
        <div className='relative grow pl-2'>
          <div className='relative h-[80px]'>
            <a href='https://soundcloud.com/nightcrawlrrr?ref=clipboard&p=i&c=0&si=3818435E365B4227B91219BBBA149453&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>
              <Image
                width={60}
                height={0}
                src='/images/soundcloud-icon.png'
                className='absolute left-9 top-3'
                alt='soundcloud'
              />
            </a>

            <a href='https://instagram.com/slxndxrmvnx?igshid=Zjc2ZTc4Nzk='>
              <Image
                width={80}
                height={0}
                src='/images/instagram-96.png'
                className='absolute right-6'
                alt='instagram'
              />
            </a>
          </div>

          <div className='text-xl pl-1 font-bold pb-8'>
            <BiUpArrowAlt className='inline' />
            <p className='inline'> Click Here </p>
            <BiUpArrowAlt className='inline' />
          </div>

          <p className='text-xl'>&quot;It&apos;s Slendo Hoe&quot;</p>

        </div>

      </div>

    </main>
  )
}