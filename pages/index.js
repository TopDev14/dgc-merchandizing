import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  // Timer until drop
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const deadline = new Date("2023-04-01T14:00:00-05:00");
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = deadline - currentTime;
      setTimeLeft(timeDiff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));

  return (
    <>
      <Head>
        <title>DGC Merchandizing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="DGC Merchandizing" />
        <meta
          name="description"
          content="The official DGC website where you can find all your DGC related apparel." />
      </Head>

      <main className="bg-black flex min-h-screen text-white">
        {/* DGC Slogan*/}
        <div className='w-full pt-8 md:p-16'>
          <button>
            <Link href='/shop/apparel'>
              <h1 className={`text-bold text-5xl self-start inline`}>
                <p className='text-6xl inline'>D</p>.ont
                <p className='text-6xl inline'> G</p>.et
                <p className='text-6xl inline'> C</p>.aught
              </h1>
            </Link>
          </button>

          <h2 className='text-green-400 pt-6 text-xl'>{hours} hours, {minutes} minutes, {seconds} seconds</h2>

          {/* DGC Home Image */}
          <div className='relative'>
            <Image
              src='/images/Photo_T_1.png'
              width={300}
              height={300}
              alt='DGC Home Image'
              className='mt-6 mx-auto'
              priority
            />

          </div>

        </div>
      </main>
    </>
  )
}