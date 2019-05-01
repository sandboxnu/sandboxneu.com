/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Footer from "./footer"
import Nav from "./nav"
import GlobalStyle from "styles/GlobalStyle"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allFooterJson {
          edges {
            node {
              email
              facebook {
                url
                icon {
                  childImageSharp {
                    fixed(width: 25) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              linkedin {
                url
                icon {
                  childImageSharp {
                    fixed(width: 25) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              instagram {
                url
                icon {
                  childImageSharp {
                    fixed(width: 25) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <GlobalStyle />
        <main>{children}</main>
        <Footer pages={["Home"]} {...data.allFooterJson.edges[0].node} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
