import { SB_NAVY } from "@colors"
import ClientPageProjectImage from "content/clients/project.jpeg"
import React from "react"
import styled from "styled-components"
import Body from "styles/components/Body"
import { Header } from "styles/components/Header"
import bulletPoint from "images/sandbox-bullet.svg"
import PropTypes from "prop-types"

const BlueBackgroundSection = styled.div`
  background-color: ${SB_NAVY};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5em 2em 5em 2em;
  margin: 0 auto;

  @media (min-width: 1000px) {
    min-height: 20vh;
    max-width: 100vw;
  }

  @media (max-width: 600px) {
    padding: 5em 3em;
  }
`

const IntroductionContainer = styled.div`
  max-width: 40%;
  @media (max-width: 1100px) {
    max-width: 700px;
    width: 100%;
  }
`

const ProjectContainer = styled.div`
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
`

const ProjectImage = styled.img`
  width: 90%;
  height: auto;
  @media (max-width: 1400px) {
    width: 95%;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`
const ProjectLabel = styled.p`
  color: #fff;
  font-size: 24px;
  font-family: Brandon;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const WhitePageHeader = styled(Header)`
  color: white;
  font-size: 4em;
  letter-spacing: 0.02em;

  @media (max-width: 600px) {
    font-size: 3em;
  }
`

const BodyText = styled(Body)`
  color: white;
`

const ListContainer = styled.div`
  margin: 35px 0px 0px 0px;
  padding: 0px;
`

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px 0px;
`

const ListItem = styled.p`
  color: white;
  font-size: 1.4em;
  line-height: 1.1;
  margin: 0px 0px 0px 20px;
`

const BulletPointContainer = styled.div`
  width: 27px;
`

const ClientPageIntroduction = ({ reasonsToWorkWithSandbox }) => {
  return (
    <BlueBackgroundSection>
      <IntroductionContainer>
        <WhitePageHeader>Work With Sandbox</WhitePageHeader>
        <BodyText>
          We’re constantly on the lookout for meaningful, impactful, and
          exciting projects because we love the challenge of building real
          products that a client depends on.
        </BodyText>
        <ListContainer>
          {reasonsToWorkWithSandbox.map((r, index) => (
            <ListItemContainer key={index}>
              <BulletPointContainer>
                <img src={bulletPoint} alt="bullet point"></img>
              </BulletPointContainer>
              <ListItem>{r}</ListItem>
            </ListItemContainer>
          ))}
        </ListContainer>
      </IntroductionContainer>
      <ProjectContainer>
        <ProjectImage
          src={ClientPageProjectImage}
          alt="Sandbox Project"
        ></ProjectImage>
        <ProjectLabel>Khoury Office Hours</ProjectLabel>
      </ProjectContainer>
    </BlueBackgroundSection>
  )
}

ClientPageIntroduction.propTypes = {
  reasonsToWorkWithSandbox: PropTypes.arrayOf(PropTypes.string.isRequired)
    .isRequired,
}

export default ClientPageIntroduction
