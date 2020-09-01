import styled from "styled-components"
import { SB_NAVY } from "@colors"

const Banner = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  display: flex;
  height: 93px;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: ${SB_NAVY};
  color: #ffffff;
  & * {
    font-family: inherit;
  }

  @media (max-width: 400px) {
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export default Banner
