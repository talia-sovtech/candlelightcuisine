import React from "react";
import { Routes, Route } from "react-router-dom"
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.jpg";
import { BrowserRouter as Link } from 'react-router-dom';
import SignUp from "./SignUp";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
       {/* <Dialog/> */}
      <LeftSide className="flexCenter">
        <div>
          
       
          <h1 className="extraBold font60 purpleColor">Recipes in a flash, before the lights crash</h1>
          <HeaderP className="font13 semiBold">
          With convenience provided by AI-powered ingredient identification, this platform generates personalized meal suggestions tailored to each user’s unique preferences, needs and available ingredients. By taking into consideration factors such as meal preferences, dietary restrictions, available cooking time, and household appliances, our solution offers a customized experience that caters to the specific requirements of each individual while being aligned to your load-shedding schedule!
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="dining-image" src={HeaderImage} alt="office" />
          <QuoteWrapper className="flexCenter radius8">
          <BtnWrapper>
            <Link to="/signup" className="btn btn-primary">Signup</Link>
            <FullButton action = {() => <SignUp/>}className="signin-button" title="Let's get cooking ➡"  />
            {/* <Link to={'/signup'} className="signin-button">Sign Up</Link> */}
          </BtnWrapper>
            {/* <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Ralph Waldo Emerson</p>
            </div> */}
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;



