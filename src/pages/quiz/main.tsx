import React from 'react';
import styled from 'styled-components';
import NextQuestionButton from '../../app.feature/quiz/NextQuestionButton';
import WrapperQuizItem from '../../app.feature/quiz/WrapperQuizItem';

const ScreenQuizMain: React.FC = () => {
  return (
    <StyledWrapper>
      <WrapperQuizItem />
      <NextQuestionButton />
    </StyledWrapper>
  );
};

export default ScreenQuizMain;

const StyledWrapper = styled.div``;
