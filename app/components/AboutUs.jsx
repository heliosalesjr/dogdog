import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-slate-500 to-[#ADD8E6] py-16" id='contact'>
      <div className="container mx-auto max-w-6xl px-6 flex flex-col lg:flex-row items-center">
        {/* Texto */}
        <div className="w-full lg:w-2/3 text-center lg:text-left px-8 md:px-0 lg:pr-8">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">About Me</h2>

          <p className="text-lg text-white mb-4 leading-relaxed">
            Hey there! I'm a developer who loves dogs and creating unique, accessible experiences for everyone. 
            <span className="font-semibold"> Guess The Woof</span> started as a small experiment with a dog breed API 
            and grew into something fun for all ages.
          </p>

          <p className="text-lg text-white mb-4 leading-relaxed">
            My goal? Build something so simple that even my grandparents could enjoy it—while still being engaging for everyone. 
            Whether you're a dog lover or just curious, I hope this game brings some joy to your day!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 flex items-center gap-2 bg-black text-white text-lg font-semibold border-4 border-black rounded-lg hover:bg-gray-800 transition-transform active:translate-x-1 active:translate-y-1 shadow-black shadow-solid justify-center sm:justify-start"
            >
              <FaGithub size={20} />
              Repository
            </a>
            <a
              href="https://www.linkedin.com/in/helio-sales/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 flex items-center gap-2 bg-black text-white text-lg font-semibold border-4 border-black rounded-lg hover:bg-gray-800 transition-transform active:translate-x-1 active:translate-y-1 shadow-black shadow-solid justify-center sm:justify-start"
            >
              <FaLinkedin size={20} />
              Get in Touch
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full lg:w-1/3 mt-10 lg:mt-0 flex justify-center">
          <div className="w-64 sm:w-80 lg:w-full max-w-sm">
            <Image
              src="/img/heliosal.png"
              alt="Portrait of me, Helio Sales, the developer, the mind, the man behind Guess The Woof"
              className="w-full rounded-3xl border-4 border-black shadow-black shadow-solid"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}