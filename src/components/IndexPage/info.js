import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Card from "components/card"
import fiona from "content/team/profileImages/pastSemesters/fiona.png"
import pills from "images/pharmd-pills.svg"
import github from "images/github.svg"
import tree from "images/oasis-logo.png"

import {
  SB_ORANGE,
  SB_SALMON,
  SB_NAVY,
  SB_LIGHT_SALMON,
  SB_LIGHT_ORANGE,
  SB_LIGHT_SALMON_RGBA,
  SB_LIGHT_ORANGE_RGBA,
  lightenDarkenColor,
} from "@colors"

const CardLayout = styled.div`
  padding: 12vh 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    padding: 8vh 0;
`
const CardsTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 120px;

  > div {
    height: 300px;
    width: 530px;
    :first-child {
      margin-right: 50px;
    }
  }

  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    padding: 0;

    > div {
      :first-child {
        margin-right: 0;
        margin-bottom: 120px;
      }
    }
  }

  @media (max-width: 700px) {
    margin-bottom: 0;
    > div {
      height: fit-content;
      width: 100vw;
      padding-top: 45px;
      padding-bottom: 45px;
      margin-bottom: 70px;
      :first-child {
        margin-bottom: 70px;
      }
    }
  }
`
const CardsBot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > div {
    height: 300px;
    width: 530px;
    :first-child {
      margin-right: 50px;
    }
  }

  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    padding: 0;

    > div {
      :first-child {
        margin-right: 0;
        margin-bottom: 120px;
      }
    }
  }

  @media (max-width: 700px) {
    > div {
      height: fit-content;
      width: 100vw;
      padding-top: 45px;
      padding-bottom: 45px;
      :first-child {
        margin-bottom: 70px;
      }
    }
  }
`
const WorkWithUs = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
  display: inline-block;
  margin: 70px 20px 60px 10px;
  color: ${SB_NAVY};

  @media (max-width: 700px) {
    margin: 0;
    margin-top: 20px;
    margin-left: 5px;
    border-left: solid 2px ${SB_SALMON};
    padding-left: 10px;
  }
`
const JoinTheTeam = styled.div`
  display: flex;
  margin: 40px 22px 22px 10px;

  @media (max-width: 700px) {
    margin: 0;
    margin-top: 20px;
    margin-left: 5px;
    border-left: solid 2px ${SB_SALMON};
    padding-left: 10px;
  }
`
const JoinTheTeamText = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
  margin-right: 24px;
  color: ${SB_NAVY};
`
const JoinTheTeamImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    border-radius: 50%;
    height: 108px;
    width: 108px;
    background: rgba(196, 196, 196, 0.5);
    margin-bottom: 16px;
    & > img {
      width: 100%;
    }
  }
  & > span {
    white-space: nowrap;
    font-family: Open Sans;
    font-size: 10px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const PharmDPills = styled.img`
  position: absolute;
  right: -10%;
  bottom: 8%;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const PharmDContent = styled.div`
  width: 230px;
  position: relative;
  top: 100px;

  @media only screen and (max-width: 700px) {
    position: unset;
  }
`
const PharmDText = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
  color: ${SB_NAVY};

  @media only screen and (max-width: 700px) {
    margin-top: 20px;
  }
`

const RepoLink = styled.a`
  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const OasisText = styled.p`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
  color: ${SB_NAVY};
`
const OasisContent = styled.div`
  margin-top: 30px;
`
const OasisLogo = styled.img`
  position: absolute;
  top: 95px;
  left: -20px;
  z-index: -1;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const Info = ({ collaborate, join, spotlight, oasis }) => {
  const lightOrangeHover = "#fff0d4"
  const lightSalmonHover = "#fee6e3"
  return (
    <CardLayout>
      <CardsTop>
        <Card
          color={SB_SALMON}
          backgroundColor={SB_LIGHT_SALMON}
          backgroundColorHover={lightSalmonHover}
          linkSrc={collaborate.linkSrc}
          linkText={collaborate.linkText}
          title={collaborate.title}
          titleAlign={"left"}
          isSpotlight={false}
        >
          <WorkWithUs>{collaborate.copy}</WorkWithUs>
        </Card>
        <Card
          color={SB_SALMON}
          backgroundColor={SB_LIGHT_SALMON}
          backgroundColorHover={lightSalmonHover}
          linkSrc={join.linkSrc}
          linkText={join.linkText}
          title={join.title}
          titleAlign={"left"}
          isSpotlight={false}
        >
          <JoinTheTeam>
            <JoinTheTeamText>{join.copy}</JoinTheTeamText>
            <JoinTheTeamImage>
              <div>
                <img src={fiona} alt="member" />
              </div>
              <span>{join.name}</span>
              <span>Sandbox Head of UX Design</span>
            </JoinTheTeamImage>
          </JoinTheTeam>
        </Card>
      </CardsTop>
      <CardsBot>
        <Card
          color={SB_ORANGE}
          backgroundColor={SB_LIGHT_ORANGE}
          backgroundColorHover={lightOrangeHover}
          linkSrc={spotlight.linkSrc}
          linkText={spotlight.linkText}
          title={spotlight.title}
          titleAlign={"right"}
          isSpotlight={true}
        >
          <PharmDContent>
            <RepoLink href={spotlight.repoLink}>
              <img src={github} alt="github" />
            </RepoLink>
            <PharmDText>{spotlight.copy}</PharmDText>
          </PharmDContent>
          <PharmDPills src={pills} alt="pills" />
        </Card>
        <Card
          color={SB_ORANGE}
          backgroundColor={SB_LIGHT_ORANGE}
          backgroundColorHover={lightOrangeHover}
          linkSrc={oasis.linkSrc}
          linkText={oasis.linkText}
          title={oasis.title}
          titleAlign={"right"}
          isSpotlight={false}
        >
          <OasisContent>
            <OasisText>{oasis.copy1}</OasisText>
            <OasisText>{oasis.copy2}</OasisText>
          </OasisContent>
          <OasisLogo src={tree} alt="tree" />
        </Card>
      </CardsBot>
    </CardLayout>
  )
}

Info.propTypes = {
  collaborate: PropTypes.exact({
    title: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkSrc: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
  }),
  join: PropTypes.exact({
    title: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
  }),
  spotlight: PropTypes.exact({
    title: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkSrc: PropTypes.string.isRequired,
    repoLink: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
  }),
  oasis: PropTypes.exact({
    title: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkSrc: PropTypes.string.isRequired,
    copy1: PropTypes.string.isRequired,
    copy2: PropTypes.string.isRequired,
  }),
}

export default Info
