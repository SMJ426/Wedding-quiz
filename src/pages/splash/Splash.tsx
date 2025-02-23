import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ScreenSplashContent = () => {
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push('/quiz/main');
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <StyledWrapper>
      <h1>👰유나&희도🤵</h1>
      {/* TODO : 이미지는 누나가 준 걸로 다시 수정 예정 */}
      <img src="/images/thumbnail_image.png" alt="image_of_splash" />
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
  width: 100%;
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    position: absolute;
    z-index: 99;
    top: 30%;

    color: #ebe7e5;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    animation: ${fadeIn} 2s forwards;
  }
`;
