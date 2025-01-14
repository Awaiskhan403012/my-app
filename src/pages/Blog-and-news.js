import React from 'react';
import '../assets/css/Blogpage.css';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Navbar from '../components/Navbar';
import Blogtitle from '../components/Blogtitle';
import Blognav from '../components/BlogNavbar';
import ShowCard from '../components/Card';
import Footer from '../components/Footer';

function Blog_and_news(){
    return(
        <>
        <Navbar />
        <div className='c-container flex-evenly' >
        <Blogtitle img='img' title='Wellcome' desc='this our first blog' />
        <Blognav />
        <ShowCard.BlogingCard img='img' title='Blog' description='description' tag='tags' category='category' date='29-12' />
        <ShowCard.BlogingCard img='img' title='Blog' description='description' tag='tags' category='category' date='29-12' />
        <ShowCard.BlogingCard img='img' title='Blog' description='description' tag='tags' category='category' date='29-12' />
        <ShowCard.BlogingCard img='img' title='Blog' description='description' tag='tags' category='category' date='29-12' />
        <ShowCard.BlogingCard img='img' title='Blog' description='description' tag='tags' category='category' date='29-12' />
        <ShowCard.BlogingCard img='img' title='Blog' description='description' tag='tags' category='category' date='29-12' />
        <Footer />
        </div>
        </>
    )
    
}

export default Blog_and_news;