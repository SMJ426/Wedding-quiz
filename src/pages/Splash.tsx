import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

const ScreenSplashContent = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // 메인으로 이동 후
    }, 2000); // 2초 후 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  return (
    <StyledWrapper>
      <img src="/images/splash_image.png" alt="스플래쉬이미지" />
    </StyledWrapper>
  );
};

export default ScreenSplashContent;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
