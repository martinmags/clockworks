import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import analogclock from './analog-clock-face.png';

const AnalogClock = () => {
  /* Calculate seconds, minutes, hours initial value */
  const deg = 6;
  const [time, setTime] = useState(new Date());
  const [seconds, setSeconds] = useState(time.getSeconds() * deg);
  const [minutes, setMinutes] = useState(time.getMinutes() * deg);
  const [hours, setHours] = useState(time.getHours() * 30 + minutes / 12);

  /* Update time every 1s */
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setSeconds(time.getSeconds() * deg);
      setMinutes(time.getMinutes() * deg);
      setHours(time.getHours() * 30 + minutes / 12);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time, seconds, minutes, hours]);

  return (
    <Wrapper>
      <ClockFace>
        <img width='350' height='350' src={analogclock} alt='clockface' />
        <Hour>
          <HourHand time={hours} />
        </Hour>
        <Minute>
          <MinuteHand time={minutes} />
        </Minute>
        <Second>
          <SecondHand time={seconds} />
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

/* Draws and positions the clock face img */
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

/* Handle Clock animation rotation */
const rotation = (t) => keyframes`
  from { transform: rotate( ${t}deg); }
  to { transform: rotate( 360deg)}
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
  animation: ${(props) => rotation(props.time)} 3600s linear infinite;

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
  animation: ${(props) => rotation(props.time)} 3600s steps(60) infinite;

  &:before {
    ${before}
    width: 4px;
    height: 90px;
    background-color: ${(props) => props.theme.primaryGray};
    z-index: 2;
  }
`;
const SecondHand = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 230px;
  height: 230px;
  animation: ${(props) => rotation(props.time)} 60s steps(60) infinite;

  &:before {
    content: '';
    position: absolute;
    border-radius: 6px 6px 0 0;
    width: 2px;
    height: 150px;
    background-color: ${(props) => props.theme.primaryGray};
    z-index: 3;
  }
`;

export default AnalogClock;
