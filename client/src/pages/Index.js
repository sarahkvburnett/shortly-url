import React from 'react';
import { Intro } from '../components/index/Intro';
import { LinkShortener} from '../components/linkcrud/LinkShortener';
import { Links } from '../components/links/IndexLinks';
import { Statistics } from '../components/index/Statistics';
import { Boost } from '../components/index/Boost';

export const Home = () => {
  return (
     <div className="home">
        <Intro/>
        <LinkShortener position="-17vh"/>
        <Links/>
        <Statistics/>
        <Boost/>
      </div>
  )
}