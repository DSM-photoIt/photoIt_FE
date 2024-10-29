import styled from 'styled-components';
import Webcam from 'react-webcam';
import { Frame } from '../components/public/Frame';
import { useEffect, useRef, useState } from 'react';
import { theme } from '../theme/theme';
import { useNavigate } from 'react-router-dom';

export const PhotoShootPage = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [isCapture, setIsCapture] = useState(null);
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    if (count < 9) {
      if (countDown > 0) {
        const timeCount = setInterval(() => {
          setCountDown((prevCountDown) => prevCountDown - 1);
        }, 1000);

        return () => clearInterval(timeCount);
      } else {
        setCountDown(10);
        capture();
      }

      if (count === 8) {
        setTimeout(() => {
          navigate('/photocheck');
        }, 2000);
      }
    }
  }, [count, countDown]);

  const capture = () => {
    if (webcamRef.current) {
      const imgSrc = webcamRef.current.getScreenshot();
      setCount((prevCount) => prevCount + 1);
      setIsCapture(imgSrc);
      localStorage.setItem(count, imgSrc);
    }

    setTimeout(() => setIsCapture(null), 1300);
  };

  return (
    <PhotoShootContainer>
      <Frame />
      <WebcamContainer>
        <TimeCount>{countDown}</TimeCount>
        <Webcam
          width={2500}
          height={780}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      </WebcamContainer>
      <Frame />
      {isCapture && <PhotoFinish>{count + ' / 9'}</PhotoFinish>}
    </PhotoShootContainer>
  );
};
const TimeCount = styled.div`
  transform: scaleX(-1);
  position: absolute;
  font-size: 45px;
  font-weight: 700;
  color: ${theme.color.white};
  background-color: transparent;
  top: 42px;
  right: 70px;
`;

const PhotoFinish = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 700;
  color: ${theme.color.white};
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: ${theme.color.gray};
`;

const PhotoShootContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

const WebcamContainer = styled.div`
  width: 1040px;
  height: 780px;
  transform: scaleX(-1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
