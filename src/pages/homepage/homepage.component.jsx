import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

// homepage component returns the directory component
const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;
