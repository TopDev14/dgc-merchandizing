export default function Socials({ sponsor }) {

  return (
    <div className="flex flexwrap justify-center">
      {sponsor.socials.map((social, index) => {
        return (
          <a key={index} href={Object.values(social)}>
            <img
              className='h-8 md:h-12 ml-2'
              src={`images/${Object.keys(social)}-icon.png`}
            />
          </a>
        )
      })}
    </div>
  )
}