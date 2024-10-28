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

  useEffect(() => {
    if (count <= 9) {
      const timer = setTimeout(() => {
        capture();
      }, 10000);
      if (count === 9) {
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }

      return () => clearTimeout(timer);
    }
  }, [count]);

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
`;
