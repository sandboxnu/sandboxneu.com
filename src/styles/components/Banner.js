import styled from "styled-components"
import { SB_NAVY } from "@colors"

const Banner = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  display: flex;
  min-height: 93px;
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
`

export default Banner
