import React from 'react';

interface Props {
  onClick: () => void;
}

const Hamburger = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="m2">
      <div className="transform scale-50">
        <div className="h-2 w-12 bg-white mb-2" />
        <div className="h-2 w-12 bg-white mb-2" />
        <div className="h-2 w-8 bg-white" />
      </div>
    </button>
  );
};

export default Hamburger;
