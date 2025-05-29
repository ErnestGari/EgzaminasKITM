import React from 'react'

const HeaderComponent = () => {
  return (
    <div>

        <header>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand">Film Management System</a>
                <button className='btn btn-outline-secondary' onClick={(e) => {e.preventDefault();
                window.location.href='http://localhost:3000/categories';
             }}> Categories</button>

                <button className='btn btn-outline-secondary' onClick={(e) => {e.preventDefault();
                window.location.href='http://localhost:3000/films';
             }}> Films</button>

            </nav>
        </header>

    </div>
  )
}

export default HeaderComponent