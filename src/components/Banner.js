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

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
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

  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;
    width: 100%;
  }
`;

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
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
