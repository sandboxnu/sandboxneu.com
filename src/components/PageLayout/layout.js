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

const Layout = ({ children, page }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            pages {
              name
              route
            }
          }
        }
        allFooterJson {
          edges {
            node {
              email
              facebook {
                url
              }
              linkedin {
                url
              }
              instagram {
                url
              }
              github {
                url
              }
              slack {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Nav
          siteTitle={data.site.siteMetadata.title}
          pages={data.site.siteMetadata.pages}
          page={page}
        />
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
