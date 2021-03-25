import React from "react"
import styled from "styled-components"
import Layout from "components/PageLayout/layout"
import SEO from "components/seo"
import Banner from "styles/components/Banner"
import tree from "images/oasis2.svg"

import {
  SB_NAVY,
  SB_ORANGE,
  SB_SALMON,
  SB_LIGHT_ORANGE,
  SB_LIGHT_SALMON,
} from "@colors"

const Title = styled.div`
  color: ${SB_ORANGE};
  display: flex;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 50px;
  font-style: italic;
  text-transform: uppercase;
  margin: 80px auto;
  margin-bottom: 40px;
  width: 200px;
  @media (max-width: 600px) {
    justify-content: center;
    padding: 0;
  }
`

const SmallTitle = styled(Title)`
  font-size: 30px;
  width: 300px;
  justify-content: center;
  margin-bottom: 40px;
`

const Text = styled.span`
  color: ${SB_NAVY};
  font-weight: 400;
  font-size: 28px;
  font-style: italic;
  font-family: Montserrat;
  margin: 40px auto;
  margin-bottom: 160px;
  display: block;
  width: 50%;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const SpecialText = styled.span`
  color: ${SB_ORANGE};
  font-weight: 600;
  font-size: 28px;
  font-style: italic;
  font-family: Montserrat;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`
const Wrapper = styled.div`
  padding: 5em 150px 0 150px;
  @media (max-width: 1000px) {
    padding: 5em 0 0 0;
  }
`

const OasisBanner = styled(Banner)`
  background-color: ${SB_LIGHT_ORANGE};
  color: ${SB_NAVY};
  margin-bottom: 100px;
`

const StyledLink = styled.a`
  color: ${SB_NAVY} !important;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0 0 0;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

const Card = styled.div`
  border: 3px solid #fff;
  width: ${props => (props.width ? `${props.width}` : "fit-content")};
  height: fit-content;
  position: relative;
  border-color: ${SB_LIGHT_SALMON};
  padding: 25px;
  margin: 20px;
  width: 300px;
  min-height: 190px;

  @media (max-width: 1000px) {
    border-color: #fff;
    border-top-color: ${SB_LIGHT_SALMON};
    width: initial;
    height: initial;
    margin: 0;
  }
`
const CardTitle = styled.span`
  background: white;
  color: ${SB_SALMON};
  font-family: Montserrat;
  font-size: 18px;
  left: 0;
  top: -15px;
  padding: 0 20px;
  position: absolute;
  width: ${props => props.width};
`

const BodyText = styled.p`
  background: white;
  color: ${SB_NAVY};
  font-family: Montserrat;
  font-size: 15px;
`
const OasisLogo = styled.img`
  position: absolute;
  top: 95px;
  left: -20px;
  z-index: -1;
  opacity: 20%;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`

const OasisPage = () => {
  return (
    <Layout page="oasis">
      <SEO />
      <Wrapper>
        <Title>OASIS</Title>
        <Text>
          Oasis is the place to go to gain practical experience&nbsp;
          <SpecialText>building web and mobile applications.</SpecialText>
          &nbsp;We make the opportunity to work on a software project available
          to everyone,&nbsp;
          <SpecialText>regardless of experience level.</SpecialText>
        </Text>
      </Wrapper>
      <SmallTitle>WHY JOIN OASIS?</SmallTitle>
      <CardContainer>
        <Card>
          <CardTitle width={"200px"}>
            designed for any experience level
          </CardTitle>
          <BodyText>
            Whether it’s your first time developing a web app or you’re an
            experienced developer, our mentoring resources can help make your
            project a success.
          </BodyText>
        </Card>
        <Card>
          <CardTitle width={"260px"}>
            bridge the gap between classes&nbsp;&amp;&nbsp;co-op
          </CardTitle>
          <BodyText>
            Participating in Oasis will help you learn co-op applicable skills
            not taught explicitly in coursework.
          </BodyText>
        </Card>
        <Card>
          <CardTitle width={"180px"}>pursue project ideas together</CardTitle>
          <BodyText>
            Oasis gives you the opportunity to meet motivated people, form
            teams, come up with an idea, and work together to make it a reality.{" "}
          </BodyText>
        </Card>
      </CardContainer>
      <OasisLogo src={tree} alt="tree" />
      <OasisBanner>
        VISIT&nbsp;
        <StyledLink href="https://www.oasisneu.com/">OASISNEU.COM</StyledLink>
      </OasisBanner>
    </Layout>
  )
}

export default OasisPage
