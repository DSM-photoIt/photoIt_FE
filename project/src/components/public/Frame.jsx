import styled from 'styled-components';
import { FramePhrase } from './FramePhrase';

export const Frame = () => {
  return (
    <>
      <FrameContainer>
        <FramePhrase />
        <FramePhrase />
        <FramePhrase />
      </FrameContainer>
    </>
  );
};

const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 328px;
  padding: 0;
  border: 0;
  margin: 0;
`;
