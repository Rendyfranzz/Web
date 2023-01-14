import BG from "@/components/BG";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="min-h-main">
        <div className='h-screen flex flex-row items-center justify-between layout relative overflow-hidden'>
          <div className='h-[70%]'>
            <div className='flex flex-col'>
              <p className="h1 text-3xl md:text-5xl 2xl:text-6xl">HELLO ,I AM</p>
              <p className="h1 text-3xl md:text-5xl 2xl:text-6xl mt-2"><span className='transition-colors
            bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40
           dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent h1 text-3xl md:text-5xl 2xl:text-6xl'>RENDI </span>DWI FRANCISKO</p>
              <div className='w-full mt-20 md:mt-12'>
                <p className="h1">Informatics Engineering Student of<br></br> Institute Teknologi Sepuluh Nopember</p>
              </div>
            </div>
          </div>
          <div className='w-[30%] h-[80%] border'>
          </div>
          {/* <BG className="absolute bottom-60 right-6 h-full translate-y-[37%] transform-gpu w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px] z-[-1] opacity-70 dark:opacity-70" /> */}
        </div>
      </section>
    </Layout>

  )
}
