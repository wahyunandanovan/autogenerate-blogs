import React from 'react';
//COMPONENTS
import Banner from './Banner';
import Introduction from './Introduction';
import Trending from './Trending';
import Recommendation from './Recomendation';
import Post from './Post';

function HomeSection() {
  return (
    <React.Fragment>
      <Banner />
      <Introduction />
      <Trending />
      <Recommendation />
      <Post />
    </React.Fragment>
  );
}

export default HomeSection;
