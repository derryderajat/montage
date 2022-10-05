import Head from 'next/head';
import Header from '../components/Header';
export default function Home() {
  return (
    <div className='bg-[#151516] h-screen text-[#d4d4d4] snap-y snap-mandatory w-full overflow-scroll z-0'>
      <Head>
        <title>Derry&#39;s Portofolio</title>
      </Head>
      <Header />
    </div>
  );
}
