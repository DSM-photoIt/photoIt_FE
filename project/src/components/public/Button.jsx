import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const Button = ({ childeren, onClick }) => {
  return (
    <>
      <ButtonContainer onClick={onClick}>{childeren}</ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  border: 1px solid ${theme.color.white};
  border-radius: 50px;
  font-size: 22px;
  font-weight: 700;
  color: ${theme.color.white};
  background-color: transparent;
`;
