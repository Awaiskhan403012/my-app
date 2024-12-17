import React from 'react';
import '../assets/Main.css';
import '../assets/css/Blogpage.css';
function BlogNavM() {
    return (
        <>
        <nav className='bm-navbar flex-column'>

          <h5 className='logoText mar'>Blogs :</h5>
          <div className='navLinks mar'>
          
            <a className='navItem mar'>All</a>
            <a className='navItem mar'>Music</a>
            <a className='navItem mar'>Arts</a>
          </div>
          <input type='search' placeholder='Search'></input>
          <button className="btn mar">search</button>
          
        </nav>
      </>
    );
}

export default BlogNavM;