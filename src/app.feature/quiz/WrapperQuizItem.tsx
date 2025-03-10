import React from 'react';
import styled from 'styled-components';
import ProgressBarSection from './ProgressBarSection';
import QuizQuestion from './QuizQuestion';
import AnswerOptionsWrapper from './AnswerOptionsWrapper';
import { quizData } from '../../data/quizData';

const WrapperQuizItem: React.FC = ({}) => {
  return (
    <StyledWrapper>
      {quizData.map((quizDataItem, index) => {
        return (
          <>
            <ProgressBarSection quizNumber={index + 1} />
            <QuizQuestion questionsData={quizDataItem.question} />
            <AnswerOptionsWrapper
              optionsData={quizDataItem.options}
              answersData={quizDataItem.answer}
            />
          </>
        );
      })}
    </StyledWrapper>
  );
};

export default WrapperQuizItem;

const StyledWrapper = styled.div``;
