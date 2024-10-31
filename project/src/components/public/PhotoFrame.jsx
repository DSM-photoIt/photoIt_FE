import styled from 'styled-components';
import { theme } from '../../theme/theme';
import frameLeft from '../../assets/frame/frameLeft.svg';
import frameRight from '../../assets/frame/frameRight.svg';
import frameTitle from '../../assets/frame/frameTitle.svg';
import { forwardRef } from 'react';

export const PhotoFrame = forwardRef(({ selectedImg, className }, ref) => {
  return (
    <>
      <FrameContainer ref={ref} className={className}>
        <TitleContainer>
          <img src={frameTitle} alt="title" />
        </TitleContainer>
        <SubOneContainer>
          <img src={frameLeft} alt="left" />
          <PhotoContents>
            {selectedImg.map((imgSrc, index) => {
              return (
                <PhotoContent key={index}>
                  {imgSrc ? (
                    <SelectedImage src={imgSrc} alt="img" />
                  ) : (
                    <EmptyContainer />
                  )}
                </PhotoContent>
              );
            })}
          </PhotoContents>
          <img src={frameRight} alt="right" />
        </SubOneContainer>
      </FrameContainer>
    </>
  );
});

const EmptyContainer = styled.div`
  width: 250px;
  height: 159px;
  background-color: ${theme.color.black};
`;

const SelectedImage = styled.img`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
`;

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
  align-items: space-around;
  gap: 30px;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  margin: 23px 0 0 17px;
`;

const PhotoContent = styled.div`
  width: 250x;
  height: 175px;
`;
