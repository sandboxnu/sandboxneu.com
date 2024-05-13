import { SB_NAVY, SB_BUTTON_BLUE, SB_SALMON, SB_INK } from "@colors"
import React from "react"
import styled from "styled-components"
import Section from "styles/components/Section"
import { Header } from "styles/components/Header"
import Button from "components/ApplyPage/button"

const RecruitingSection = styled(Section)`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: none;
  padding: 5em 4em;

  @media (min-width: 1000px) {
    min-height: 20vh;
    max-width: 100vw;
  }

  @media (max-width: 1100px) {
    display: block;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    padding: 2.5em;
    max-width: 100vw;
  }
`

const SectionHeader = styled(Header)`
  color: ${SB_NAVY};
  font-size: 4em;
  letter-spacing: 0.02em;
  margin-top: 0;

  @media (max-width: 600px) {
    font-size: 3em;
  }
`

const HowSandboxRecruits = () => {
  return (
    <RecruitingSection>
        <SectionHeader>How we recruit</SectionHeader>
        <Button
          name={<span>Read our article: <b>How Sandbox Recruits Developers</b>!</span>}
          route={"/how-we-recruit-developers"}/>
      <Button
        name={<span>Read our article: <b>How Sandbox Recruits UX Designers</b>!</span>}
        route={"/how-we-recruit-ux-designers"} />
      <Button
        name={<span>Read our article: <b>How Sandbox Recruits Brand Designers</b>!</span>}
        route={"/how-we-recruit-brand-designers"} />
    </RecruitingSection>
  )
}

export default HowSandboxRecruits;
