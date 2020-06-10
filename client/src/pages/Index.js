import React, { useContext } from 'react';
import { Intro } from '../layout/Intro';
import { LinkShortener} from '../components/IndexShortener';
import { Links } from '../components/IndexLinks';
import { Statistics } from '../layout/Statistics';
import { Boost } from '../layout/Boost';

export const Home = () => {
  return (
     <div className="home">
        <Intro/>
        <LinkShortener/>
        <Links/>
        <Statistics/>
        <Boost/>
      </div>
  )
}