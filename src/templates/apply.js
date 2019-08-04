import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { SB_LIGHT_BLUE, SB_NAVY, SB_ORANGE, SB_YELLOW } from "@colors"
import Buttons from "components/ApplyPage/Buttons"
import ApplyContent from "components/ApplyPage/ApplyContent"
import Layout from "components/layout"
import SEO from "components/seo"
import Section from "styles/components/Section"

export const ROLE_COLOR_MAPPING = {
  developer: SB_ORANGE,
  designer: SB_LIGHT_BLUE,
  devops: SB_YELLOW,
}

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
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

const ApplyPage = ({ data, pageContext }) => {
  const [selectedRole, setSelectedRole] = useState(pageContext.role)
  const allRoles = pageContext.roles
  const currentRoleData = data.allMarkdownRemark.edges.find(
    roleData => roleData.node.frontmatter.role === selectedRole
  ).node
  return (
    <Layout page="apply">
      <SEO
        title="Apply"
        keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
      />
      <BlueFontSection>
        <Header>APPLY TO SANDBOX</Header>
        <Subtitle>
          The Sandbox team is currently accepting applications for summer and
          fall.
          <br />
          Check out our open roles below.
        </Subtitle>
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
        />
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
