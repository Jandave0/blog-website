import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Home = () => {
  return (
    <>
    <Header />
    <main>
        {/* Hero section */}
        <section className='section-1'>
            <div className='hero d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='text-center'>
                        <span>WELCOME</span>
                        <h1>Crafting dreams with <br />Quality & Excellence.</h1>
                        <p>We are a team of dedicated professionals committed to delivering exceptional construction services.</p>
                        <div className='mt-4'>
                        <a className='btn btn-primary'>Contact Now</a>
                        <a className='btn btn-secondary ms-2'>View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about us */}
        <section className='section-2 py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={AboutImg} className='w-100 ' alt="" />
                    </div>
                    <div className='col-md-6'>
                        <span>ABOUT US</span>
                        <h2>Building a Better Future, One Project at a Time.</h2>
                        <p>At Babid Constructions, we are passionate about creating spaces that inspire and endure. With a commitment to quality, innovation, and customer satisfaction, we bring your construction dreams to life. Our team of experienced professionals is dedicated to delivering exceptional results, whether it's a residential project, commercial development, or infrastructure venture. </p>
                        <p>We believe in building not just structures but lasting relationships with our clients, partners, and communities. Join us on our journey to shape a better future through construction excellence.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </>
    
    
  )
}

export default Home