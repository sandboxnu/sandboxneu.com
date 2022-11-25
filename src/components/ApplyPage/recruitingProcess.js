import { SB_NAVY, SB_BUTTON_BLUE, SB_SALMON, SB_INK } from "@colors"
import React from "react"
import styled from "styled-components"
import Section from "styles/components/Section"
import { Header } from "styles/components/Header"
import sandboxRecruitingProcess from "images/sandbox-recruiting-process.svg"

const RecruitingProcessSection = styled(Section)`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  @media (max-width: 1100px) {
    display: block;
    max-width: 100%;
  }
`

const RecruitingProcessContainerLeft = styled.div`
  max-width: 600px;
  z-index: 3;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const RecruitingProcessContainerRight = styled.div`
  z-index: 10;
  width: calc(40vw - 8em);
  margin-top: 12em;

  @media (max-width: 1100px) {
    width: 100%;
    margin-top: 4em;
  }
`

const NavyPageHeader = styled(Header)`
  color: ${SB_NAVY};
  font-size: 3.8em;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 2.3em;
    margin-top: 2em;
    margin-bottom: 1em;
  }
`

const ProcessOrderedList = styled.ol`
  counter-reset: process-counter;
  list-style: none;
  padding: 0;
`

const ProcessOrderedListItem = styled.li`
  counter-increment: process-counter;
  margin-bottom: 2rem;
  display: flex;
  
  &:before {
    flex-shrink: 0;
    content: counter(process-counter);
    color: #FFFFFF;
    font-family: "Montserrat";
    font-style: italic;
    font-weight: bold;
    font-size: 40px;
    background: ${SB_SALMON};
    border-radius: 50%;
    text-align: center;

    width: 80px;
    height: 80px;
    line-height: 80px;
    position: relative;
    display: inline-block;
    vertical-align: top;

    @media (max-width: 600px) {
      font-size: 20px;
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
  }
`

const ProcessImage = styled.img`
  width: 60vw;
  height: auto;
  position: relative;
  z-index: -1;
  margin-top: 0;
  margin-left: 0;
  @media (max-width: 1100px) {
    display: none;
  }
`

const ProcessOrderedListItemContent = styled.div`
  margin-top: -1.5rem;
  margin-left: 20px;
`

const ProcessListHeader = styled.h4`
  color: ${SB_SALMON};
  font-family: "Montserrat";
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 1rem;
`

const ProcessListBody = styled.p`
  color: ${SB_INK};
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 1.5;
  margin-top: 0;
`

const RecruitingProcess = () => {
  return (
    <RecruitingProcessSection>
        <RecruitingProcessContainerLeft>
            <NavyPageHeader>Our Process</NavyPageHeader>
            <ProcessImage
            src={sandboxRecruitingProcess}
            alt="Sandbox Recruiting Process"
            ></ProcessImage>
        </RecruitingProcessContainerLeft>
        <RecruitingProcessContainerRight>
            <ProcessOrderedList>
            <ProcessOrderedListItem>
                <ProcessOrderedListItemContent>
                <ProcessListHeader>Application</ProcessListHeader>
                <ProcessListBody>
                    An application consists of a Google Form that helps us learn more about you, 
                    your background, and what makes you a good fit for Sandbox. Once you've submitted 
                    your application, we'll place you on a track and get the first round underway!
                </ProcessListBody>
                </ProcessOrderedListItemContent>
            </ProcessOrderedListItem>
            <ProcessOrderedListItem>
                <ProcessOrderedListItemContent>
                <ProcessListHeader>Take-home Challenge</ProcessListHeader>
                <ProcessListBody>
                    The first round consists of a take-home coding challenge. There's a unique challenge 
                    for each of the three tracks, with the objective of guiding you to learn something new 
                    and exercising your skills. After the take-home challenge is completed, we'll narrow our 
                    candidate pool and move on to round 2.
                </ProcessListBody>
                </ProcessOrderedListItemContent>
            </ProcessOrderedListItem>
            <ProcessOrderedListItem>
                <ProcessOrderedListItemContent>
                <ProcessListHeader>Interview</ProcessListHeader>
                <ProcessListBody>
                    The second and final round of our recruiting process will be a Zoom interview between you 
                    and two Sandbox members. It'll consist of a conversation about your background and experiences, 
                    as well as a coding portion.
                </ProcessListBody>
                </ProcessOrderedListItemContent>
            </ProcessOrderedListItem>
            </ProcessOrderedList>
        </RecruitingProcessContainerRight>
    </RecruitingProcessSection>
  )
}

export default RecruitingProcess;
