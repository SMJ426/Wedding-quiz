import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import ScreenSplashContent from './splash';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <ScreenSplashContent />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
`;
