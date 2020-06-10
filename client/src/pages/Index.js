import React, { useContext } from 'react';
import { Intro } from '../layout/Intro';
import { LinkShortener} from '../components/Shortener';
import { Links } from '../components/IndexLinks';
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