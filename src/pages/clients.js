import Layout from "components/PageLayout/layout"
import SEO from "components/seo"
import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"
import Banner from "styles/components/Banner"
import Section from "styles/components/Section"
import { Header } from "styles/components/Header"

import { SB_SALMON_RGBA, SB_ORANGE, SB_NAVY } from "@colors"

const BlueFontSection = styled(Section)`
  background-color: ${SB_NAVY};
`

const ClientPage = ({}) => {
  return (
    <Layout page="clients">
      <SEO title="clients" keywords={[`clients`, `researchers`, "projects"]} />
      <BlueFontSection>
        <Header>Work With Sandbox</Header>
      </BlueFontSection>
    </Layout>
  )
}

export default ClientPage
