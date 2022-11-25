import { SB_NAVY } from "@colors"
import CommunityImage from "content/apply/community.jpg"
import React from "react"
import styled from "styled-components"
import Body from "styles/components/Body"
import { Header } from "styles/components/Header"

const BlueBackgroundSection = styled.div`
  background-color: ${SB_NAVY};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5em 3em 5em 4em;
  margin: 0 auto;

  @media (min-width: 1000px) {
    min-height: 20vh;
    max-width: 100vw;
  }

  @media (max-width: 600px) {
    padding: 5em 3em;
  }
`;

const IntroductionContainer = styled.div`
  max-width: 40%;
  @media (max-width: 1100px) {
    max-width: 700px;
    width: 100%;
  }
`;

const FeatureContainer = styled.div`
  max-width: 60%;
  padding: 4em 4em 0em 4em;
  text-align: right;
  @media (max-width: 1400px) {
    padding: 4em 0em 0em 4em;
  }
  @media (max-width: 1100px) {
    max-width: 100%;
    width: 100%;
    padding: 4em 4em 0em 4em;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    padding: 3em 0em 0em 0em;
  }
`;

const FeaturedImage = styled.img`
  width: 90%;
  height: auto;
  @media (max-width: 1400px) {
    width: 95%;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const WhitePageHeader = styled(Header)`
  color: white;
  font-size: 4em;
  letter-spacing: 0.02em;

  @media (max-width: 600px) {
    font-size: 3em;
  }
`;

const BodyText = styled(Body)`
  color: white;
`;

const ApplyPageIntroduction = () => {
  return (
    <BlueBackgroundSection>
      <IntroductionContainer>
        <WhitePageHeader>Join the Sandbox Community</WhitePageHeader>
        <BodyText>
          As Sandbox continues to grow, we aim to build a diverse and 
          skilled team of developers with a variety of experiences, 
          interests, and backgrounds.
        </BodyText>
      </IntroductionContainer>
      <FeatureContainer>
        <FeaturedImage
          src={CommunityImage}
          alt="Sandbox Community"
        ></FeaturedImage>
      </FeatureContainer>
    </BlueBackgroundSection>
  )
}

export default ApplyPageIntroduction;
