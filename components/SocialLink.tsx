import React, { useState } from 'react';

interface Props {
  fullText: string;
  shorthandLetters: number[];
}

// ex: { fullText: 'twitter', shorthandLetters: [0,1]}
// makes 'TW' shorthand

const SocialLink = ({ fullText, shorthandLetters }: Props) => {
  const [showFullText, setShowFullText] = useState(false);

  return fullText
    .split('')
    .map((letter, index) =>
      shorthandLetters.includes(index) ? (
        <span>
          {/* letter with rotate animation, always visible and has room in flex flow */}
        </span>
      ) : (
        <span>
          {/* letter invisible and made position absolute to take out of flex flow if inactive */}
        </span>
      )
    );
};

export default SocialLink;
