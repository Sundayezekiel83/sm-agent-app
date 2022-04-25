import styled from 'styled-components/macro';

export const Overlay = styled.div`
  width: inherit;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
`;

export const OuterWrapper = styled.section`
  /* width: 100vw; */
  height: 100vh;
  margin-top: 0;
  background-image: url(${({ bgImage }) => (bgImage ? `${bgImage}` : ``)});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const RHSInnerWrapper = styled.div`
  width: calc(100vw - 500px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
`;

export const WelcomeTextWrapper = styled.div`
  padding: 20px 30px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TwoImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  margin-top: 20px;
`;
export const ImageOne = styled.div`
  background-image: url(${({ imageOne }) => (imageOne ? `${imageOne}` : ``)});
  width: 200px;
  height: 200px;
  background-position: top center;
  background-size: cover;
  
`;

export const ImageTwo = styled.div`
  background-image: url(${({ imageTwo }) => (imageTwo ? `${imageTwo}` : ``)});
  background-position: top center;
  background-size: cover;
  width: 200px;
  height: 200px;
  font-size: 20px;
  margin-top: 20%;
  margin-left: -25px;
  border: 5px solid white;
  position: relative;
  z-index: 2;
`;

export const LHSInnerWrapper = styled.div`
  width: 500px;
  height: 100%;
  background: whitesmoke;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
