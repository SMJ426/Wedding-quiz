import styled from 'styled-components';
import ScreenMainContent from '../app.feature/main/ScreenMainContent';

export const App = () => {
  return (
    <StyledWrapper>
      <ScreenMainContent />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
`;
