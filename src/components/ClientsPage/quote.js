import { SB_NAVY, SB_SALMON } from "@colors"
import {
  Text as DefaultText,
  TextContainer as DefaultTextContainer,
} from "components/quote"
import React from "react"
import styled from "styled-components"
import Banner from "styles/components/Banner"

const QuoteBanner = styled(Banner)`
  background-color: ${SB_SALMON};
`
const TextContainer = styled(DefaultTextContainer)`
  padding: 3em;
  @media (max-width: 1000px) {
    margin: 0;
  }
  @media (max-width: 600px) {
    line-height: 22px;
    margin: 0;
    padding: 30px;
  }
`

const Text = styled(DefaultText)`
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.5;
  @media (max-width: 1000px) {
    font-size: 1em;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const SpecialText = styled(Text)`
  font-size: 1em;
  color: ${SB_NAVY};
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const Reference = styled.div`
  margin-top: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-family: Brandon;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`

const Quote = ({}) => {
  return (
    <QuoteBanner>
      <TextContainer>
        <Text>
          "The brilliant and diligent engineers of Sandbox are, without
          exaggeration, <SpecialText>indispensable to my research</SpecialText>.
          I came to them with a challenging problem, and they delivered a
          solution that is{" "}
          <SpecialText>twice as professional as I’d hoped</SpecialText>, in half
          the time I’d expected."
        </Text>
        <Reference>Dr. Melnikoff, Researcher</Reference>
      </TextContainer>
    </QuoteBanner>
  )
}

export default Quote
