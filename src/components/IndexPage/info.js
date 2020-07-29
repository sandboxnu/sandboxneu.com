import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Card from "components/card"
import pills from "images/pharmd-pills.svg"
import github from "images/github.svg"

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
    margin-bottom: 72px;
  }
`
const CardsRight = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  & > div:first-child {
    height: 318px;
    margin-bottom: 72px;
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
  line-height: 20px;
  display: flex;
  margin: 50px 20px 50px 20px;
  width: fit-content;
`
const JoinTheTeamText = styled.div`
  font-family: Open Sans;
  font-size: 15px;
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
  right: -9%;
  bottom: 11%;
`

const PharmDContent = styled.div`
  width: 450px;
`
const PharmDText = styled.div`
  font-family: Open Sans;
  font-size: 15px;
`

const Info = ({ collaborate, join, spotlight, oasis }) => {
  return (
    <CardLayout>
      <CardsLeft>
        <Card
          color={SB_SALMON}
          linkSrc={"mailto:info@sandboxneu.com"}
          linkText={"work with us >"}
          title={"WORK WITH US"}
          titleAlign={"left"}
          isSpotlight={false}
        >
          <WorkWithUs>{collaborate.copy}</WorkWithUs>
        </Card>
        <Card
          color={SB_SALMON}
          linkSrc={"/apply"}
          linkText={"apply here >"}
          title={"JOIN THE TEAM"}
          titleAlign={"left"}
          isSpotlight={false}
        >
          <JoinTheTeam>
            <JoinTheTeamText>{join.copy}</JoinTheTeamText>
            <JoinTheTeamImage>
              <div>
                <img />
              </div>
              <span>Jane Doe, Sandbox developer</span>
            </JoinTheTeamImage>
          </JoinTheTeam>
        </Card>
      </CardsLeft>
      <CardsRight>
        <Card
          color={SB_ORANGE}
          linkSrc={"/portfolio"}
          linkText={"work with us >"}
          title={"PHARMD TRACKER"}
          titleAlign={"right"}
          isSpotlight={true}
        >
          <PharmDContent>
            <a href="https://github.com/sandboxnu/pharmd-tracker">
              <img src={github} />
            </a>
            <PharmDText>{spotlight.copy}</PharmDText>
          </PharmDContent>
          <PharmDPills src={pills} />
        </Card>
        <Card
          color={SB_ORANGE}
          linkSrc={"https://oasis.sandboxnu.com/"}
          linkText={"learn more about oasis >"}
          title={"OASIS"}
          titleAlign={"right"}
          isSpotlight={false}
        />
      </CardsRight>
    </CardLayout>
  )
}

export default Info
