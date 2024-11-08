import React from "react";
import styled from "styled-components";

import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
`;

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
`;

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="weirdos" />
        <img src={img2} alt="weirdos" />
        <img src={img3} alt="weirdos" />
        <img src={img4} alt="weirdos" />
        <img src={img5} alt="weirdos" />
        <img src={img6} alt="weirdos" />
      </ImgContainer>
      <Title>
        {" "}
        Join the <br /> weirdos club
      </Title>
      <BtnContainer>
        <Button text="Join Now" link="#" />
      </BtnContainer>
    </Section>
  );
};

export default Banner;
