import React from 'react';
import styled, { keyframes } from 'styled-components';
import analogclock from './analog-clock-face.png';

const AnalogClock = () => {
  return (
    <Wrapper>
      <ClockFace>
        <img width='350' height='350' src={analogclock} alt='clockface' />
        <Hour>
          <HourHand />
        </Hour>
        <Minute>
          <MinuteHand />
        </Minute>
        <Second>
          <SecondHand />
        </Second>
      </ClockFace>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/** Calculate Rotation Animation */
const deg = 6;
const day = new Date();
const minute = day.getMinutes() * deg;
const second = day.getSeconds() * deg;
const hour = day.getHours() * 30 + minute / 12 - 360;

/** Animation Keyframe Sequences */
const hourRotation = keyframes`
  from { transform: rotate( ${hour}deg); }
  to { transform: rotate( 360deg ); }
`;
const minuteRotation = keyframes`
  from { transform: rotate(${minute}deg); }
  to { transform: rotate(360deg); }
`;
const secondRotation = keyframes`
  from { transform: rotate(${second}deg); }
  to { transform: rotate(360deg); }
`;

const ClockFace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.01),
    inset 0 -15px 15px rgba(255, 255, 255, 0.01), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  /** Center point */
  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: ${(props) => props.theme.primaryGray};
    border-radius: 50%;
    z-index: 5;
  }
`;

/* Containers for each respective hand */
const Hour = styled.div`
  position: absolute;
`;
const Minute = styled.div`
  position: absolute;
`;
const Second = styled.div`
  position: absolute;
`;

/* Clock hands */
const hands = `
  display: flex;
  justify-content: center;
  border-radius: 50%;
`;
const before = `
  content: '';
  position: absolute;
  border-radius: 6px 6px 0 0;
`;
const HourHand = styled.div`
  ${hands}
  width: 160px;
  height: 160px;
  animation: ${hourRotation} 3600s linear infinite;

  &:before {
    ${before}
    width: 8px;
    height: 80px;
    background-color: red;
    z-index: 1;
  }
`;

const MinuteHand = styled.div`
  ${hands}
  width: 190px;
  height: 190px;
  animation: ${minuteRotation} 3600s steps(60) infinite;

  &:before {
    ${before}
    width: 4px;
    height: 90px;
    background-color: white;
    z-index: 2;
  }
`;

const SecondHand = styled.div`
  ${hands}
  width: 230px;
  height: 230px;
  animation: ${secondRotation} 60s steps(60) infinite;

  &:before {
    ${before}
    width: 2px;
    height: 150px;
    background-color: white;
    z-index: 3;
  }
`;

export default AnalogClock;
