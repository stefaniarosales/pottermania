import React from 'react'
import { HarryPotterContainer, Letter, Space } from './StyledHarryPotterText'

const HarryPotterText = () => {
    const text = 'Harry  Potter';
  
    return (
        <HarryPotterContainer>
        {text.split('').map((char, index) =>
          char === ' ' ? (
            <Space key={index} />
          ) : (
            <Letter key={index} delay={index * 0.1}>
              {char}
            </Letter>
          )
        )}
      </HarryPotterContainer>
    );
  };
  
  export default HarryPotterText;