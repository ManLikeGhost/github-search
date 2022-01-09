import React from 'react'
import PropTypes from 'prop-types';

const NavBar = ({title, icon}) => {
  
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}></i> {title}</h1>
      </nav>
    )
  
}

NavBar.defaultProps = {
  title: 'Github Search',
  icon: 'fab fa-github'
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default NavBar






