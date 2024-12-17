import React from 'react';
import '../assets/Main.css';
import '../assets/css/Blogpage.css';
function BlogNav() {
    return (
        <>
        <nav className='bnavbar'>

          <h5 className='logoText'>Blogs :</h5>
          <div className='navLinks'>
          
            <a className='navItem'>All</a>
            <a className='navItem'>Music</a>
            <a className='navItem'>Arts</a>
          </div>
          <input type='search' placeholder='Search'></input>
          <button className="btn">search</button>
          
        </nav>
      </>
    );
}

export default BlogNav;