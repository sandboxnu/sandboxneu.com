import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import Header from "../styles/Header"

const BlueBackground = styled.div`
  background: #2a426b;
`
const WhiteHeader = styled(Header)`
  color: white;
  position: relative;
  text-align: center;
  margin-bottom: 100px;
  & :after{
    content:"";
    position: absolute;
    bottom: -40px;
    left: 300px;
    right: 300px;
    height: 22px;
    border-top: 5px solid #FCBC80;
    z-index: 10;
  }
`
const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: -150px;
`
const OrangeHeader = styled(Header)`
  font-size: 22px;
  font-weight: 300;
  color: #fcbc80;
`
const WhiteParagraph = styled.p`
  color: white;
  line-height: 1.5;
  font-size: 20px;
`
const PaddedBlurb = styled.div`
  padding-right: 150px;
`

const Mission = ({ title, principles }) => (
  <BlueBackground>
    <Section>
      <WhiteHeader><span>{title}</span></WhiteHeader>
      <ParagraphContainer>
        {principles.map(p => (
          <PaddedBlurb>
            <OrangeHeader>{p.title}</OrangeHeader>
            <WhiteParagraph>{p.body}</WhiteParagraph>
          </PaddedBlurb>
        ))}
      </ParagraphContainer>
    </Section>
  </BlueBackground>
)

Mission.propTypes = {
  title: PropTypes.string.isRequired,
  principles: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Mission
