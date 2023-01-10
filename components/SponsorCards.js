import Socials from "./Socials"
import Image from "next/image"
import img4 from '../public/images/DGCGHOST.jpg'
import img1 from '../public/images/another-random-dude.jpg'
import img2 from '../public/images/woman-yes.jpg'

export default function SponsorCards() {
  const allDgcSponsors = [
    {
      sponsorImg: img1,
      name: 'Biboboblo',
      description: 'Yo gang what goin on. We on the DGC thangs sheeesh!',
      socials: [
        { twitter: 'https://' },
        { snapchat: 'https://' },
        { youtube: 'https://' },
      ]
    },
    {
      sponsorImg: img2,
      name: 'Shiesta',
      description: 'Even in my will keep it real, thuggin in my feel, to the day i pill, youngin bangin krill, just to pay the bills.',
      socials: [
        { youtube: 'https' }
      ]
    },
    {
      sponsorImg: img4,
      name: 'Dgc Ghost',
      description: 'Pimp gang. Gotta lotta dope bobabdopop. Dababadeeebababoob weeeee got a lot of dope, we got a lotta coke. Weeee got weeeeed thats a lotta smoke.',
      socials: []
    }
  ]

  return (
    allDgcSponsors.map((sponsor, index) => {
      return (
        <section key={index} className={`md:flex-row max-w-[90%] md:max-w-[75%] mx-auto shadow-lg shadow-slate-700 rounded-lg overflow-hidden flex flex-col`}>
          <div className="relative bg-black ">
            <Image
              alt={sponsor.name}
              src={sponsor.sponsorImg}
              width={400}
              height={400}
              priority
            />
          </div>

          <div className='bg-white rounded-b-lg flex py-6 gap-4 flex-col justify-between px-2 md:p-8 '>
            <h1 className='text-4xl mx-auto font-bold'>{sponsor.name}</h1>
            <p className='text-lg'>{sponsor.description}</p>
            <Socials sponsor={sponsor} />
          </div>
        </section>
      )
    })
  )
}