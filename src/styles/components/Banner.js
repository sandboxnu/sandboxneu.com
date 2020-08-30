import tw, { styled, css } from "twin.macro"

const Banner = styled.div([
  css`
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
    ${tw`bg-SB_NAVY`}
    color: #ffffff;
    & * {
      font-family: inherit;
    }
  `,
])

export default Banner
