import React from 'react';
import styles from './Header.module.css';

const Header = function () {
 return (
  <header className={styles.header}>
  <nav>
   <a href='#'>Header</a>
   <ul>
    <li><a href='#'>Home</a></li>
    <li><a href='#'>About</a></li>
    <li><a href='#'>Contacts</a></li>
   </ul>
  </nav>
  </header>
 );
};

export default Header;