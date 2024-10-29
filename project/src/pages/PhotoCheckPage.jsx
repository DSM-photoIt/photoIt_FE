import styled from 'styled-components';
import { PhotoFrame } from '../components/public/PhotoFrame';
import { useState } from 'react';
import { theme } from '../theme/theme';

export const PhotoCheckPage = () => {
  //따로따로 처리할 때 useState와 onClick 함수를 따로 처리해주는 것이 비효율적인 것 같다.

  // const [isImgClick, setIsImgClick] = useState(false);

  // const photoClick = () => {
  //   setIsImgClick(!isImgClick);
  // };
  const firstImg = localStorage.getItem('0');
  const secondImg = localStorage.getItem('1');
  const thirdImg = localStorage.getItem('2');
  const fourthImg = localStorage.getItem('3');
  const fifthImg = localStorage.getItem('4');
  const sixthImg = localStorage.getItem('5');
  const seventhImg = localStorage.getItem('6');
  const eightedImg = localStorage.getItem('7');
  const ninedImg = localStorage.getItem('8');

  return (
    <PhotoContainer>
      <ImgContentsTwo>
        <ImgContentsOne>
          <ImgContent
            src={firstImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
          <ImgContent
            src={secondImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
          <ImgContent
            src={thirdImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
        </ImgContentsOne>
        <ImgContentsOne>
          <ImgContent
            src={fourthImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
          <ImgContent
            src={fifthImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
          <ImgContent
            src={sixthImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
        </ImgContentsOne>
        <ImgContentsOne>
          <ImgContent
            src={seventhImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
          <ImgContent
            src={eightedImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
          <ImgContent
            src={ninedImg}
            // onClick={photoClick}
            // isImgClick={isImgClick}
          />
        </ImgContentsOne>
      </ImgContentsTwo>
      <PhotoFrame />
    </PhotoContainer>
  );
};

const PhotoContainer = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  margin-top: 70px;
`;

const ImgContentsTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const ImgContentsOne = styled.div`
  display: flex;
  gap: 48px;
`;

const ImgContent = styled.img`
  width: 300px;
  height: 190px;
  transform: scaleX(-1);
  /* border: ${(props) =>
    props.isImgClick ? `2px solid ${theme.color.white}` : `none`};
  position: relative; */
`;

// const CompleteContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   background-color: ${theme.color.gray};
// `;
