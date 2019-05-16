import React from "react"
import styled from "styled-components"

import { SB_NAVY } from "@colors"
import Buttons from "components/JoinPage/Buttons"
import Layout from "components/layout"
import SEO from "components/seo"
import Section from "styles/Section"

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
`

const Header = styled.h1`
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  font-size: 2.7em;
`

const Subtitle = styled.h3`
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
`

const JoinPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
      />
      <BlueFontSection>
        <Header>JOIN SANDBOX</Header>
        <Subtitle>
          The Sandbox Core team is currently accepting applications for summer
          and fall.
          <br />
          Check out our open roles below.
        </Subtitle>
        <Buttons roles={["Developer", "Designer", "DevOps"]} />
      </BlueFontSection>
    </Layout>
  )
}

export default JoinPage
