import React from 'react';
import '../assets/css/Blogpage.css';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Navbar from '../components/Navbar';
import Blogtitle from '../components/Blogtitle';
import Blognav from '../components/BlogNavbar';
import ShowCard from '../components/ShowCard';
import Footer from '../components/Footer';

function Blog_and_news(){
    return(
        <>
        <Navbar />
        <div className='container' >
        <Blogtitle img='img' title='dd' desc='ssd' />
        <Blognav />
        <ShowCard />
        <Footer />
        </div>
        </>
    )
    
}

export default Blog_and_news;