import React, {lazy, Suspense} from 'react';
import Intro from '../components/index/Intro';
import LinkShortener from '../components/linkcrud/LinkShortener';
const Links = lazy(() => import('../components/links/IndexLinks'));
const Statistics = lazy(() => import('../components/index/Statistics'));
const Boost = lazy(() => import('../components/index/Boost'));

const Home = () => {
  return (
     <div className="home">
        <Intro/>
        <LinkShortener position="-17vh"/>
        <Suspense fallback={<div/>}>
          <Links/>
          <Statistics/>
          <Boost/>
        </Suspense>
      </div>
  )
};

export default Home;