import styled from 'styled-components';
import { PhotoFrame } from '../components/public/PhotoFrame';
import { useRef, useState, useEffect } from 'react';
import { theme } from '../theme/theme';
import { Frame } from '../components/public/Frame';
import { Button } from '../components/public/Button';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { PrintingPage } from './PrintingPage';

export const PhotoCheckPage = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  // const [photoPNG, setPhotoPNG] = useState(null);
  const photoRef = useRef();

  const printClick = () => {
    const photo = photoRef.current;
    domtoimage.toBlob(photo).then((blob) => {
      setIsPrinting(true);
      saveAs(blob, 'photoIt.png');
      // const url = URL.createObjectURL(blob);
      // setPhotoPNG(url);
    });
  };

  const [selectedImg, setSelectedImg] = useState([]);

  const firstImg = localStorage.getItem('0');
  const secondImg = localStorage.getItem('1');
  const thirdImg = localStorage.getItem('2');
  const fourthImg = localStorage.getItem('3');
  const fifthImg = localStorage.getItem('4');
  const sixthImg = localStorage.getItem('5');
  const seventhImg = localStorage.getItem('6');
  const eightedImg = localStorage.getItem('7');
  const ninedImg = localStorage.getItem('8');

  const selectedClick = (src) => {
    setSelectedImg((prevImg) => {
      if (prevImg.length < 4 && !prevImg.includes(src)) {
        return [...prevImg, src];
      } else {
        return prevImg;
      }
    });
  };

  return (
    <PhotoCheckContainer>
      {isPrinting && <PrintingPage></PrintingPage>}
      <Frame />
      <PhotoContainer>
        <ImgContentsTwo>
          <ImgContentsOne>
            <ImgContent
              src={firstImg}
              onClick={() => selectedClick(firstImg)}
            />
            <ImgContent
              src={secondImg}
              onClick={() => selectedClick(secondImg)}
            />
            <ImgContent
              src={thirdImg}
              onClick={() => selectedClick(thirdImg)}
            />
          </ImgContentsOne>
          <ImgContentsOne>
            <ImgContent
              src={fourthImg}
              onClick={() => selectedClick(fourthImg)}
            />
            <ImgContent
              src={fifthImg}
              onClick={() => selectedClick(fifthImg)}
            />
            <ImgContent
              src={sixthImg}
              onClick={() => selectedClick(sixthImg)}
            />
          </ImgContentsOne>
          <ImgContentsOne>
            <ImgContent
              src={seventhImg}
              onClick={() => selectedClick(seventhImg)}
            />
            <ImgContent
              src={eightedImg}
              onClick={() => selectedClick(eightedImg)}
            />
            <ImgContent
              src={ninedImg}
              onClick={() => selectedClick(ninedImg)}
            />
          </ImgContentsOne>
          <Button childeren={'print'} onClick={printClick} />
        </ImgContentsTwo>
        <PhotoFrame
          selectedImg={selectedImg}
          ref={photoRef}
          className="photo"
        />
      </PhotoContainer>
      <Frame />
    </PhotoCheckContainer>
  );
};

const PhotoCheckContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 100px;
  justify-content: center;
  margin: 70px 0 70px 0;
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
  width: 250px;
  height: 159px;
  transform: scaleX(-1);
  object-fit: cover;
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
