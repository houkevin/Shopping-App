import React, { useContext } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import DirectoryContext from '../../contexts/directory/directory.context';

import './directory.styles.scss';

// directory component gets the sections from DirectoryContext
// it returns an array of sections where each item is a
// MenuItem that passes the key as id and otherSectionProps
const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
