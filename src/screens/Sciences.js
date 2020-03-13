import React, { useState, useEffect } from 'react';

import ScienceFeed from '../components/ScienceFeed';

const Sciences = (props) => {

   return (
      <ScienceFeed
         route={props.route}
         navigation={props.navigation}
      />
   )
}

export default Sciences;