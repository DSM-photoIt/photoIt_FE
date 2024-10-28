import styled from 'styled-components';
import Webcam from 'react-webcam';
import { Frame } from '../components/public/Frame';

export const PhotoShootPage = () => {
  return (
    <PhotoShootContainer>
      <Frame />
      <WebcamContainer>
        <Webcam width={2500} height={780} />
      </WebcamContainer>
      <Frame />
    </PhotoShootContainer>
  );
};

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
