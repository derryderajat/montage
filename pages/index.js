import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
export default function Home() {
  return (
    <div className=' h-screen text-[#d4d4d4] snap-y snap-mandatory w-full overflow-scroll z-0'>
      <Head>
        <title>Derry&#39;s Portofolio</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
    </div>
  );
}
