import React from 'react';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';


export default props => (
  <div className="App">
    <TopBar {...props} />
    <HomeContent {...props} />
  </div>
);