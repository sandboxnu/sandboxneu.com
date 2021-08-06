import { SB_INK, SB_NAVY, SB_SALMON } from "@colors"
import Button from "components/ClientsPage/Button"
import sandboxClientProcess from "images/sandbox-client-process.svg"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Body from "styles/components/Body"
import { Header } from "styles/components/Header"
import Section from "styles/components/Section"

const ClientProcessSection = styled(Section)`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0em 2em 1em 2em;

  @media (min-width: 1000px) {
    max-width: 100vw;
  }

  @media (max-width: 1000px) {
    display: block;
  }
`

const ClientProcessContainerLeft = styled.div`
  max-width: 600px;
  z-index: 3;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const ClientProcessContainerRight = styled.div`
  z-index: 10;
  width: 40vw;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

const WhitePageHeader = styled(Header)`
  color: white;
  font-size: 4em;
  letter-spacing: 0.02em;
`

const NavyPageHeader = styled(WhitePageHeader)`
  color: ${SB_NAVY};
  font-size: 3.8em;
  margin-bottom: 20px;
`

const ClientApplicationText = styled(Body)`
  color: ${SB_INK};
  font-family: "Montserrat";
`

const ApplyButtonContainer = styled.div`
  margin-top: 30px;
`

const ClientProcessImage = styled.img`
  width: 60vw;
  height: auto;
  position: relative;
  z-index: -1;
  margin-top: -230px;
  margin-left: 9%;
  @media (max-width: 1000px) {
    display: none;
  }
`

const ClientProcessOrderedList = styled.ol`
  counter-reset: client-process-counter;
  list-style: none;
  margin-top: 270px;

  @media (max-width: 1000px) {
    top: 0px;
    margin-top: 80px;
    padding: 0px;
  }
`

const ClientProcessOrderedListItem = styled.li`
  counter-increment: client-process-counter;
  &:before {
    content: counter(client-process-counter);
    color: #ffffff;
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

    @media (max-width: 600px) {
      font-size: 20px;
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
  }
`

const ClientProcessListHeader = styled.h4`
  color: ${SB_SALMON};
  font-family: "Montserrat";
  text-transform: uppercase;
  font-size: 22px;
  display: inline-block;
  margin-left: 20px;
  position: relative;
  top: -25px;
  @media (max-width: 600px) {
    top: 0px;
  }
`

const ClientProcessListBody = styled.p`
  color: ${SB_INK};
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  top: -50px;
  margin-left: 100px;
  @media (max-width: 600px) {
    top: -30px;
    margin-left: 60px;
  }
`

const ClientProcess = ({ clientProcessSteps, clientApplicationInfo }) => {
  return (
    <ClientProcessSection>
      <ClientProcessContainerLeft>
        <NavyPageHeader>The Sandbox Client Process</NavyPageHeader>
        <ClientApplicationText>{clientApplicationInfo}</ClientApplicationText>
        <ApplyButtonContainer>
          <Button
            name="Apply now"
            route="https://docs.google.com/forms/d/e/1FAIpQLScZTjGN87qboZRWGcbCJ7wCG35Jtg6kLDB-yrCShSO_EUECEg/viewform?usp=pp_url"
          ></Button>
        </ApplyButtonContainer>
        <ClientProcessImage
          src={sandboxClientProcess}
          alt="Sandbox Client Process"
        ></ClientProcessImage>
      </ClientProcessContainerLeft>
      <ClientProcessContainerRight>
        <ClientProcessOrderedList>
          {clientProcessSteps.map((step) => (
            <ClientProcessOrderedListItem key={step.header}>
              <ClientProcessListHeader>{step.header}</ClientProcessListHeader>
              <ClientProcessListBody>{step.body}</ClientProcessListBody>
            </ClientProcessOrderedListItem>
          ))}
        </ClientProcessOrderedList>
      </ClientProcessContainerRight>
    </ClientProcessSection>
  )
}

ClientProcess.propTypes = {
  clientProcessSteps: PropTypes.arrayOf(
    PropTypes.exact({
      header: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  clientApplicationInfo: PropTypes.string.isRequired,
}

export default ClientProcess
