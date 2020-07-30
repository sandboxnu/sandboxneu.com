import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Card from "components/card"
import pills from "images/pharmd-pills.svg"
import github from "images/github.svg"
import tree from "images/oasis-logo.png"

import { SB_ORANGE, SB_SALMON } from "@colors"

const CardLayout = styled.div`
  padding: 8vh 10vw;
  display: flex;
  justify-content: center;
  width: 100%;
`
const CardsLeft = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  & > div:first-child {
    margin-bottom: 80px;
  }
`
const CardsRight = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  & > div:first-child {
    height: 318px;
    width: 542px;
    margin-bottom: 80px;
  }
  & > div:nth-child(2) {
    height: 310px;
  }
`
const WorkWithUs = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
  display: inline-block;
  margin: 70px 20px 60px 20px;
  width: 490px;
`
const JoinTheTeam = styled.div`
  display: flex;
  margin: 40px 22px 22px;
  width: fit-content;
`
const JoinTheTeamText = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
  margin-right: 24px;
  width: 325px;
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
  }
  & > span {
    white-space: nowrap;
    font-family: Open Sans;
    font-size: 10px;
  }
`

const PharmDPills = styled.img`
  position: absolute;
  right: -15%;
  bottom: 8%;
`

const PharmDContent = styled.div`
  width: 230px;
  position: relative;
  top: 100px;
`
const PharmDText = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
`
const OasisText = styled.p`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
  width: 488px;
`
const OasisContent = styled.div`
  margin-top: 30px;
`
const OasisLogo = styled.img`
  position: absolute;
  top: 95px;
  left: -20px;
`

const Info = ({ collaborate, join, spotlight, oasis }) => {
  return (
    <CardLayout>
      <CardsLeft>
        <Card
          color={SB_SALMON}
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
                <img src={join.imgSrc} />
              </div>
              <span>{`${join.name}, Sandbox developer`}</span>
            </JoinTheTeamImage>
          </JoinTheTeam>
        </Card>
      </CardsLeft>
      <CardsRight>
        <Card
          color={SB_ORANGE}
          linkSrc={spotlight.linkSrc}
          linkText={spotlight.linkText}
          title={spotlight.title}
          titleAlign={"right"}
          isSpotlight={true}
        >
          <PharmDContent>
            <a href={spotlight.repoLink}>
              <img src={github} />
            </a>
            <PharmDText>{spotlight.copy}</PharmDText>
          </PharmDContent>
          <PharmDPills src={pills} />
        </Card>
        <Card
          color={SB_ORANGE}
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
          <OasisLogo src={tree} />
        </Card>
      </CardsRight>
    </CardLayout>
  )
}

export default Info
