import React from 'react';

const SocialLinks = () => {
  return (
    <div className="absolute right-0 flex items-center h-96">
      <ul className="h-full flex flex-col justify-evenly">
        <li className="monument text-xl transform -rotate-90 flex-grow-0 text-center tracking-wider">
          TW
        </li>
        <li className="monument text-xl transform -rotate-90 flex-grow-0 text-center tracking-wider">
          IG
        </li>
        <li className="monument text-xl transform -rotate-90 flex-grow-0 text-center tracking-wider">
          GH
        </li>
        <li className="monument text-xl transform -rotate-90 flex-grow-0 text-center tracking-wider">
          DS
        </li>
        <li className="monument text-xl transform -rotate-90 flex-grow-0 text-center tracking-wider">
          YT
        </li>
        <li className="monument text-xl transform -rotate-90 flex-grow-0 text-center tracking-wider">
          TT
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
