import React from "react";
import styled from "styled-components";

interface LogoProps {
  fontSize: string;
}

const LogoWrapper = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: center;
`;

const StyledBrand = styled.div<{ fontSize: string }>`
  font-family: "Kalam", sans-serif;
  font-size: ${(props) => props.fontSize};
  display: flex;
`;

const Present = styled.span`
  color: #a60321;
  font-weight: bold;
`;

const Ly = styled.span`
  color: #a67c63;
  font-weight: bold;
`;

const Logo: React.FC<LogoProps> = ({ fontSize }) => {
  return (
    <LogoWrapper>
      <link href="https://fonts.googleapis.com/css?family=Kalam" rel="stylesheet" />
      <StyledBrand fontSize={fontSize}>
        <Present>Present</Present>
        <Ly>ly</Ly>
      </StyledBrand>
    </LogoWrapper>
  );
};

export default Logo;
