import React from 'react';
import { Intro } from '../layout/Intro';
import { LinkShortener} from '../components/linkcrud/LinkShortener';
import { Links } from '../components/links/IndexLinks';
import { Statistics } from '../layout/Statistics';
import { Boost } from '../layout/Boost';

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