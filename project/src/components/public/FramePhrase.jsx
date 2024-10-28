import styled from 'styled-components';
import triangle from '../../assets/frame/triangle.svg';
import { theme } from '../../theme/theme';

export const FramePhrase = () => {
  return (
    <PhraseContainer>
      <SubWriting>12</SubWriting>
      <TriangleImg src={triangle} alt="triangle img" />
      <SubWriting>Happy photo</SubWriting>
    </PhraseContainer>
  );
};
const PhraseContainer = styled.div`
  display: flex;
  gap: 25px;
  transform: rotate(90deg);
`;

const TriangleImg = styled.img``;

const SubWriting = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.color.white};
`;
