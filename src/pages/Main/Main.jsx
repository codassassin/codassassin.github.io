import React from 'react';
import './Main.scss';
import '../pages.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Blog from '../../components/Blog/Blog';
import Contact from '../../components/Contact/Contact';

const Main = () => {
    return (
        <>
            <div id='movie-bg' />
            <div className='main'>
                <div className='sidebar-container'>
                    <Sidebar />
                </div>
                <div className='App'>
                    <section id='home' className='section'>
                        <Home />
                    </section>
                    <section id='about' className='section'>
                        <About />
                    </section>
                    <section id='blog' className='section'>
                        <Blog />
                    </section>
                    <section id='contact' className='section'>
                        <Contact />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Main