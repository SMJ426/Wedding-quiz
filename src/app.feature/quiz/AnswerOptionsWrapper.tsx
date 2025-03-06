import React from 'react';
import styled from 'styled-components';
import AnswerOption from './AnswerOption';

const AnswerOptionsWrapper: React.FC = ({}) => {
  return (
    <StyledWrapper>
      AnswerOptionsWrapper
      <AnswerOption />
    </StyledWrapper>
  );
};

export default AnswerOptionsWrapper;

const StyledWrapper = styled.div``;
