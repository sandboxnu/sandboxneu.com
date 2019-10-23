import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { amplitudeLogEvent } from "utils/amplitude"

import { SB_LIGHT_BLUE, SB_NAVY, SB_ORANGE, SB_SALMON } from "@colors"
import Buttons from "components/ApplyPage/Buttons"
import ApplyContent from "components/ApplyPage/ApplyContent"
import Layout from "components/layout"
import SEO from "components/seo"
import Section from "styles/components/Section"
import Button from "styles/components/Button"
import Countdown from "components/countdown"

export const ROLE_COLOR_MAPPING = {
  developer: SB_ORANGE,
  designer: SB_LIGHT_BLUE,
  devops: SB_SALMON,
}

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
  height: 75vh;
`

const Header = styled.h1`
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  font-size: 2.5em;

  @media (min-width: 1000px) {
    font-size: 3em;
  }
`

const Subtitle = styled.h3`
  text-align: center;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`

const CenteredContent = styled.div`
  text-align: center;
  margin: auto;
`

const ApplyPage = ({ data, pageContext }) => {
  // const [selectedRole, setSelectedRole] = useState(pageContext.role)
  // const allRoles = pageContext.roles
  // const currentRoleData = data.allMarkdownRemark.edges.find(
  //   roleData => roleData.node.frontmatter.role === selectedRole
  // ).node

  // // useEffect(() => {
  // //   amplitudeLogEvent("View role", { role: selectedRole })
  // // }, [selectedRole])

  let date = new Date(1572044400000)
  return (
    <Layout page="apply">
      <SEO title="Apply" keywords={[`application`]} />
      <BlueFontSection>
        <Header>APPLY TO SANDBOX</Header>
        <Subtitle>Applications for all roles opening on 10/25!</Subtitle>
        <CenteredContent>
          <Countdown date={date.toString()}></Countdown>
          <Button href={"http://eepurl.com/gyY5lz"}>Notify Me!</Button>
          <p>
            Sign up for the mailing list to be notified when applications open!
          </p>
        </CenteredContent>
        {/* <Subtitle>Read more about Sandbox's opportunities below.</Subtitle>
        <Buttons
          roles={allRoles}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          color={ROLE_COLOR_MAPPING[selectedRole]}
        />
        <ApplyContent
          role={selectedRole}
          color={ROLE_COLOR_MAPPING[selectedRole]}
          description={currentRoleData.html}
          formLink={currentRoleData.frontmatter.formLink}
          qualities={currentRoleData.frontmatter.qualities}
          closeDate={currentRoleData.frontmatter.closeDate}
        /> */}
      </BlueFontSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ApplyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/apply/" } }) {
      edges {
        node {
          html
          frontmatter {
            qualities
            formLink
            role
            closeDate
          }
        }
      }
    }
  }
`

export default ApplyPage
