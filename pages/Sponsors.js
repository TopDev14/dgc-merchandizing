import Image from 'next/image'
import {BiUpArrowAlt} from 'react-icons/bi'

export default function Sponsors() {
  return (
    <main className='my-4 h-auto grid grid-flow-row gap-10'>
      <div className='border-2 px-4 py-6 border-black w-1/3 mx-auto h-60 rounded-lg relative'>

        <div className='relative'>
          <Image
            src={'/images/Slendo.png'}
            width={180}
            height={0}
            className=' border-2 border-black rounded-lg overflow-hidden'
            alt='sponsor'
          />


          <a href='https://soundcloud.com/nightcrawlrrr?ref=clipboard&p=i&c=0&si=3818435E365B4227B91219BBBA149453&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>
            <Image
              width={60}
              height={0}
              src='/images/soundcloud-icon.png'
              className='absolute right-[28%] top-0'
              alt='soundcloud'
            />
          </a>

          <a href='https://instagram.com/slxndxrmvnx?igshid=Zjc2ZTc4Nzk='>
            <Image
              width={80}
              height={0}
              src='/images/instagram-96.png'
              className='absolute right-0 top-[-0.6rem]'
              alt='instagram'
            />
          </a>

        <div className='absolute right-[6%] top-[40%] text-xl font-bold'>
          <BiUpArrowAlt className='inline'/>
          <p className='inline'>Click Here</p>
          <BiUpArrowAlt className='inline'/>
        </div>

        <p className='absolute right-4 text-xl top-[80%]'>&quot;It&apos;s Slendo Hoe&quot;</p>

        </div>
      </div>
    </main>
  )
}