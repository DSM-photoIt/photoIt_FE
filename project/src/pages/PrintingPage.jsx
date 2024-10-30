import styled from 'styled-components';
import { theme } from '../theme/theme';
import { Button } from '../components/public/Button';
import { useEffect, useState } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';

export const PrintingPage = () => {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);
  // const [isQR, setIsQR] = useState(false);

  const startPageNav = () => {
    navigate('/');
  };

  useEffect(() => {
    const timeOut = setInterval(() => {
      setIsComplete(true);
    }, 3000);

    return () => clearInterval(timeOut);
  }, []);

  // const qrClick = () => {
  //   setIsQR(true);
  // };

  // useEffect(() => {
  //   console.log('Photo PNG URL:', photoPNG);
  // }, [photoPNG]);

  return (
    <>
      <PrintingContainer>
        {/* {isQR && (
          <QRContainer>
            <QRCodeCanvas value={photoPNG} />
          </QRContainer>
        )} */}
        <CompleteCircle>
          <Contents>
            <PrintingText>Printing</PrintingText>
            {isComplete && (
              <>
                <SubText>complete</SubText>
                {/* <Button childeren={'QR'} onClick={qrClick} /> */}
                <Button childeren={'again'} onClick={startPageNav} />
              </>
            )}
          </Contents>
        </CompleteCircle>
      </PrintingContainer>
    </>
  );
};

// const QRContainer = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
// `;

const Contents = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  justify-content: center;
  align-items: center;
`;

const CompleteCircle = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 500px;
  border: 1px solid ${theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PrintingContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: ${theme.color.gray};
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const PrintingText = styled.div`
  font-size: 80px;
  font-weight: 700;
  color: ${theme.color.white};
`;
const SubText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.color.white};
`;
