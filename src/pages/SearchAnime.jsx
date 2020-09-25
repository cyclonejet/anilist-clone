import React from 'react';

import SearchOption from '../components/SearchOptions/SearchOptions';
import DisplayRow from '../components/DisplayRow/DisplayRow';

const style = {
  marginRight: '10%',
  marginLeft: '8%',
  marginTop: '30px',
}

const SearchAnime = () => {
  return (
    <div style={style}>
      <SearchOption />
      <DisplayRow />
      <DisplayRow />
      <DisplayRow />
    </div>
  );
};

export default SearchAnime;