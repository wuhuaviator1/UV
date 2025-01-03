import Head from 'next/head'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import Services from '../components/Services'
import Works from '../components/Works'
import About from '../components/About'
import FooterSection from '../components/FooterSection'
import Preloader from '../components/Preloader'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>UV Project - Smart Campus Smarter You</title>
        <meta name="description" content="UV is an App that facilitates academic and campus life for NYU students" />
      </Head>

      <div className="page-wrapper">
        <Navbar />
        <main>
          <Hero />
          <Overview />
          <Services />
          <section className="section about-v1">
            <Works />
            <About />
          </section>
          <FooterSection />
          <Preloader />
        </main>
      </div>
    </>
  )
}