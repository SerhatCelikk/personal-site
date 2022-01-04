import React from 'react';
import Pfp from './Pfp';
import SocialLinks from './SocialLinks';

const MainView = () => {
  return (
    <main className="relative h-full flex items-center">
      <div className="relative flex items-end h-8/12 ml-4">
        <div className="w-full">
          <Pfp />

          <h1 className="monument font-black text-4xl tracking-widest uppercase mt-5">
            <span>Jacob D.</span>
            <br />
            Castro
          </h1>

          <div>
            <h2 className="jetbrains-mono">xiv.eth</h2>
            <h2 className="jetbrains-mono">jacobdcastro.eth</h2>
          </div>
        </div>
      </div>

      <SocialLinks />
    </main>
  );
};

export default MainView;
