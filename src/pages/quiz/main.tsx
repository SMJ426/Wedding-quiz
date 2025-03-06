import React from 'react';
import styled from 'styled-components';
import ProgressBarSection from '../../app.feature/quiz/ProgressBarSection';
import QuizQuestion from '../../app.feature/quiz/QuizQuestion';
import AnswerOptionsWrapper from '../../app.feature/quiz/AnswerOptionsWrapper';
import NextQuestionButton from '../../app.feature/quiz/NextQuestionButton';

const ScreenQuizMain: React.FC = () => {
  return (
    <StyledWrapper>
      <ProgressBarSection />
      <QuizQuestion />
      <AnswerOptionsWrapper />
      <NextQuestionButton />
    </StyledWrapper>
  );
};

export default ScreenQuizMain;

const StyledWrapper = styled.div``;
