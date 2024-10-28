import styled from 'styled-components';
import { theme } from '../theme/theme';
import { Frame } from '../components/public/Frame';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();

  const startClick = () => {
    navigate('/photoshoot');
  };
  return (
    <MainContainer onClick={startClick}>
      <Frame></Frame>
      <SubContainer>
        <TitleContainer>
          <Title>PhotoIt</Title>
          <SubTitle>start</SubTitle>
        </TitleContainer>
      </SubContainer>
      <Frame></Frame>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: end;
  margin-bottom: 122px;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: 700;
  color: ${theme.color.white};
`;

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.color.white};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 320px;
  align-items: center;
`;
