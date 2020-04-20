import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { amplitudeLogEvent } from "utils/amplitude"

import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import RoleContent from "components/RolePage/RoleContent"
import Layout from "components/layout"
import SEO from "components/seo"
import Section from "styles/components/Section"

import { capitalize } from "utils/string"

export const ROLE_COLOR_MAPPING = {
  designer: SB_SALMON,
  developer: SB_ORANGE,
}

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
  padding-bottom: 50px;
  min-height: 75vh;
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
`

const RolePage = ({ data, pageContext }) => {
  const [selectedRole, setSelectedRole] = useState(pageContext.role)
  const allRoles = pageContext.roles
  const currentRoleData = data.allMarkdownRemark.edges.find(
    roleData => roleData.node.frontmatter.role === selectedRole
  ).node

  useEffect(() => {
    amplitudeLogEvent("View role", { role: selectedRole })
  }, [selectedRole])

  return (
    <Layout page="apply">
      <SEO title="Apply" keywords={[`application`]} />
      <BlueFontSection>
        <Header>{selectedRole.toUpperCase()}</Header>
        <Subtitle>
          Read more about Sandbox's {selectedRole} opportunities below.
        </Subtitle>
        {/* <Buttons
          roles={allRoles}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          color={ROLE_COLOR_MAPPING[selectedRole]}
        /> */}
        <RoleContent
          role={selectedRole}
          color={ROLE_COLOR_MAPPING[selectedRole]}
          description={currentRoleData.html}
          formLink={currentRoleData.frontmatter.formLink}
          qualities={currentRoleData.frontmatter.qualities}
          closeDate={currentRoleData.frontmatter.closeDate}
        />
      </BlueFontSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query RoleQuery {
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

export default RolePage
