import React, { useState, useEffect } from 'react';

import TechnologyFeed from '../components/TechnologyFeed';
import { fetchTechnologyArticles } from '../utils/api';

const Technology = (props) => {

   return (
      <TechnologyFeed
         route={props.route}
         navigation={props.navigation}
      />
   )
}

export default Technology;