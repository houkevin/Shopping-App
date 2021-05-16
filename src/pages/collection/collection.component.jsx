import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

// collectionpage component gets collections from
// CollectionsContext and when returning, set
// the title, and then inside the items div return the
// mapping of the CollectionItem with item.id and item.
const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
