import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { amplitudeLogEvent } from "utils/amplitude"
import { Link } from "gatsby"

import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import RoleContent from "components/RolePage/RoleContent"
import Layout from "components/PageLayout/layout"
import SEO from "components/seo"
import Section from "styles/components/Section"

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
  margin-bottom: 2em;

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`

const Breadcrumb = styled(Link)`
  width: fit-content;
  text-decoration: none;
  border-bottom: 2px solid white;
  color: ${SB_NAVY};
  transition: color 0.3s, text-shadow 0.3s, border-bottom 0.3s;
  &:hover {
    border-bottom: 2px solid ${SB_NAVY};
  }
`
const BreadcrumbSection = styled.span`
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin-top: 30px;
  margin-bottom: 55px;
  display: block;

  @media (min-width: 1000px) {
    font-size: 1em;
    margin-bottom: 0px;
    margin-left: 63px;
  }
`

const RolePage = ({ data, pageContext }) => {
  const selectedRole = pageContext.role
  const currentRoleData = data.allMarkdownRemark.edges.find(
    (roleData) => roleData.node.frontmatter.role === selectedRole
  ).node

  useEffect(() => {
    amplitudeLogEvent("View role", { role: selectedRole })
  }, [selectedRole])

  return (
    <Layout page="apply">
      <SEO title="Apply" keywords={[`application`]} />
      <BlueFontSection>
        <BreadcrumbSection>
          <Breadcrumb to="/apply">apply</Breadcrumb> / {selectedRole}
        </BreadcrumbSection>
        <Header>{selectedRole.toUpperCase()}</Header>
        <Subtitle>
          Read more about Sandbox's {selectedRole} opportunities below.
        </Subtitle>
        <RoleContent
          role={selectedRole}
          color={SB_ORANGE}
          description={currentRoleData.html}
          formLink={currentRoleData.frontmatter.formLink}
          qualities={currentRoleData.frontmatter.qualities}
          closeDate={currentRoleData.frontmatter.closeDate}
          quote={currentRoleData.frontmatter.quote}
          member={currentRoleData.frontmatter.quoteMember}
          title={currentRoleData.frontmatter.quoteMemberTitle}
          semester={currentRoleData.frontmatter.quoteMemberSemester}
          image={currentRoleData.frontmatter.quoteImage}
          isOpen={currentRoleData.frontmatter.isOpen}
          openDate={currentRoleData.frontmatter.openDate}
          mailLink={currentRoleData.frontmatter.mailLink}
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
            mailLink
            role
            isOpen
            openDate
            closeDate
            quote
            quoteMember
            quoteMemberTitle
            quoteMemberSemester
            quoteImage {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  height: 200
                  quality: 90
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
  }
`

export default RolePage
