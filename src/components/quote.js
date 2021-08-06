import styled from "styled-components"
import { SB_SALMON_RGBA, SB_ORANGE } from "@colors"

export const QuoteContainer = styled.span`
  color: ${SB_SALMON_RGBA(0.75)};
  font-family: Arial;
  font-size: 180px;
  position: absolute;
  left: 1em;
  margin-top: -0.2em;

  @media (max-width: 1000px) {
    left: 0.3em;
    margin-top: 0;
    top: 13em;
  }

  @media (max-width: 600px) {
    visibility: hidden;
  }
`
export const TextContainer = styled.div`
  margin: 0 5em;
  text-align: left;
  padding: 1em 5em;
  z-index: 5;

  @media (max-width: 1000px) {
    margin: 0;
  }

  @media (max-width: 600px) {
    line-height: 22px;
    margin: 0;
    padding: 30px 50px;
  }
`

export const Text = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  font-style: italic;
  font-family: Montserrat;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const SpecialText = styled.span`
  color: ${SB_ORANGE};
  font-weight: 600;
  font-size: 20px;
  font-family: Montserrat;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Reference = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const ReferenceName = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
`

export const ReferenceTitle = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  margin-top: -10px;
`
