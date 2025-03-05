import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ScreenSplashContent: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/quiz/main');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledWrapper>
      <div>
        <h1>유나&희도</h1>
        <span>"퀴즈로 함께하는 특별한 순간"</span>
      </div>
    </StyledWrapper>
  );
};

export default ScreenSplashContent;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/Splash_image.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${fadeIn} 2s forwards;

  div {
    @font-face {
      font-family: 'GabiaBombaram';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GabiaBombaram.woff')
        format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'GabiaBombaram', sans-serif;

    margin-top: 450px;
    text-align: center;
    color: #ebe7e5;

    > h1 {
      font-size: 40px;
      margin-bottom: 10px;
    }

    > span {
      font-size: 30px;
    }
  }
`;
