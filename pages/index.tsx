import Hamburger from 'components/Hamburger';
import MainView from 'components/MainView';
import { shuffleArray, skills } from 'lib/skills';
import React from 'react';

const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed top-0 w-screen">
        <Hamburger onClick={() => console.log('open menu')} />
      </nav>

      <MainView />

      <div className="ticker-wrap">
        <div className="ticker">
          {shuffleArray(skills).map(item => (
            <div
              key={item}
              className="ticker-item text-white inline-block font-medium whitespace-nowrap pr-full monument"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
