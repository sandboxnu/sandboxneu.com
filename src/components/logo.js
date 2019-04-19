import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "sandbox-banner.png" }) {
          childImageSharp {
            fluid(maxHeight: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className={className}
        fluid={data.placeholderImage.childImageSharp.fluid}
      >
        {children}
      </Img>
    )}
  />
)
export default Logo
