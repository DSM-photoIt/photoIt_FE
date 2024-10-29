import styled from 'styled-components';
import { theme } from '../../theme/theme';
import frameLeft from '../../assets/frame/frameLeft.svg';
import frameRight from '../../assets/frame/frameRight.svg';
import frameTitle from '../../assets/frame/frameTitle.svg';

export const PhotoFrame = () => {
  return (
    <>
      <FrameContainer>
        <img src={frameTitle} alt="title" />
        <SubOneContainer>
          <img src={frameLeft} alt="left" />
          <PhotoContents>
            <PhotoContent />
            <PhotoContent />
            <PhotoContent />
            <PhotoContent />
          </PhotoContents>
          <img src={frameRight} alt="right" />
        </SubOneContainer>
      </FrameContainer>
    </>
  );
};

const SubOneContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PhotoContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

const FrameContainer = styled.div`
  width: 300px;
  height: 900px;
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const PhotoContent = styled.div`
  width: 250px;
  height: 159px;
  background-color: transparent;
`;
