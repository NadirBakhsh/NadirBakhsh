interface Props {}

function AboutSection(props: Props) {
  const {} = props

  return (
    <div className="About h-auto bg-white px-5 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row my-16 md:my-32 md:space-x-20">
        <div className="">
          <img alt="about-me" src="./asset/frame-1.png" />
        </div>

        <div className="flex-1 mt-10 md:mt-0">
          <h2 className="text-5xl text-left text-black ">
            {' '}
            About <span className="font-extrabold">Me</span>
          </h2>
          <p className="text-base mt-4 !font-light text-zinc-500 ">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
            <br />
            <br />
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
            <br />
            <br />
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
