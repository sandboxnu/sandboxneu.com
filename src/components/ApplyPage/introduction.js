import { SB_NAVY } from "@colors"
import CommunityImage from "content/apply/community.jpg"
import React from "react"
import styled from "styled-components"
import Body from "styles/components/Body"
import { Header } from "styles/components/Header"
import { SB_ORANGE } from "../../styles/colors"
import PropTypes from "prop-types"

const BlueBackgroundSection = styled.div`
  background-color: ${SB_NAVY};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 9em 3em 5em 4em;
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
  padding-bottom: 4rem;
  
  @media (max-width: 1100px) {
    max-width: 700px;
    width: 100%;
  }
`;

const FeatureContainer = styled.div`
  max-width: 60%;
  padding: 0em 4em;
  text-align: right;
  @media (max-width: 1400px) {
    padding: 0em 0em 0em 4em;
  }
  @media (max-width: 1100px) {
    max-width: 100%;
    width: 100%;
    padding: 0em 4em;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    padding: 0;
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

const Banner = styled(Body)`
  border: 1px solid ${SB_ORANGE};
  color: ${SB_ORANGE};
  transition: background-color 0.3s;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  text-align: center;

  font-stretch: expanded;
  font-style: italic;
  font-size: 1em;
  font-weight: 600;
  padding: 7px 25px;
  margin-bottom: 1em;

  @media (max-width: 660px) {
    margin-top: 1em;
    margin-left: 0em;
    margin-bottom: 0em;
  }

  @media (min-width: 1000px) {
    margin-bottom: 0px;
  }
`

const ApplyPageIntroduction = ({ 
  title, 
  subtitle, 
  isBannerVisible, 
  applicationStatus 
}) => {
  return (
    <BlueBackgroundSection>
      <IntroductionContainer>
        {isBannerVisible && <Banner>{applicationStatus}</Banner>}
        <WhitePageHeader>{title}</WhitePageHeader>
        <BodyText>{subtitle}</BodyText>
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

ApplyPageIntroduction.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isBannerVisible: PropTypes.bool.isRequired,
  applicationStatus: PropTypes.string.isRequired
}

export default ApplyPageIntroduction;
