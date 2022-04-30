import {
  OuterWrapper,
  RHSInnerWrapper,
  ImageOne,
  ImageTwo,
  TwoImageWrapper,
  WelcomeTextWrapper,
  LHSInnerWrapper,
  Overlay,
} from './styled/authJumbotron';

export const AuthJumbotron = ({ children, ...props }) => {
  return (
    <OuterWrapper {...props}>
      <Overlay></Overlay>
      {children}
    </OuterWrapper>
  );
};

AuthJumbotron.RightSideFrame = ({ children, ...props }) => {
  return <RHSInnerWrapper {...props}>{children}</RHSInnerWrapper>;
};

AuthJumbotron.WelcomeTextWrapper = ({ children, ...props }) => {
  return <WelcomeTextWrapper {...props}>{children}</WelcomeTextWrapper>;
};

AuthJumbotron.TwoImageWrapper = ({ children, ...props }) => {
  return <TwoImageWrapper {...props}>{children}</TwoImageWrapper>;
};
AuthJumbotron.Title = ({ children, ...props }) => {
  return <ImageOne {...props}>{children}</ImageOne>;
};

AuthJumbotron.SubTitle = ({ children, ...props }) => {
  return <ImageTwo {...props}>{children}</ImageTwo>;
};
AuthJumbotron.LeftSideFrame = ({ children, ...props }) => {
  return <LHSInnerWrapper {...props}>{children}</LHSInnerWrapper>;
};
